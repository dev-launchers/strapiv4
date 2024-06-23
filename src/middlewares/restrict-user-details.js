/***
 * Main algorithm here: take the response and introspect all attributes, if any attribute is a relation, we take that object and introspect its attributes. 
 * When relation points to a user or profile, we replace that object with shrunk version, including only allowed fields.
 * Using private fields in Strapi Schema is not an option, as they are also not available for the user calling `/api/users/me` or `/api/users/:selfId`.
 * The goal of this middleware is to restrict those fields for non-owner users.
 * 
 * Metadata is not properly documented in Strapi. 
 * It is a Mapa Map-alike object where key is a modelName and value is MetaModel, which contains almost all the same info you can find under `content-types/schema.json`. 
 * See https://github.com/strapi/strapi/blob/develop/packages/core/database/src/types/index.ts#L216 and https://github.com/strapi/strapi/blob/develop/packages/core/database/src/metadata/metadata.ts
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();
    try {
      // Only need to filter if there is a response body
      if (ctx.request.method === "GET" && ctx.request.url.includes("/api/") && ctx.response.body) {
        const handler = ctx.state.route.handler; // for example: "user.me" or "api::profile.profile.findOne"
        const user = ctx.state.user;
        const idx = handler.lastIndexOf(".");
        const modelName = handler.substring(0, idx); // for example: "user" or "api::profile.profile"
        const action = handler.substring(idx + 1); // for example: "me" or "findOne"
        const metadata = strapi.db.metadata;

        const fieldsRestricter = new FieldsRestricter(metadata, config);

        ctx.response.body = fieldsRestricter.restrictFields(ctx.response.body, modelName, action, user);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

class FieldsRestricter {
  constructor(metadata, config) {
    this.metadata = metadata;
    this.config = config;
  }

  findAndRestrictUserDetails(item, modelName) {
    if (modelName === "user") {
      return this.restrictNonWrappedItem(item, this.config.allowedUserFields);
    }
    if (modelName === "plugin::users-permissions.user") {
      return this.restrictWrappedItem(item, this.config.allowedUserFields);
    }
    if (modelName === "api::profile.profile") {
      return this.restrictWrappedItem(item, this.config.allowedProfileFields);
    }
    if (!this.metadata.has(modelName)) {
      return item;
    }
    const model = this.metadata.get(modelName);
    if (model && item?.data) {
      if (Array.isArray(item.data)) {
        item.data.forEach((element) => {
          this.reviewModelAttributes(element.attributes, model);
        });
      } else {
        this.reviewModelAttributes(item.data.attributes, model);
      }
    }
    return item;
  }

  reviewModelAttributes(item, model) {
    for (let attribute in model.attributes) {
      const attributeData = model.attributes[attribute];
      if (attributeData.type === "relation" && item[attribute]) {
        item[attribute] = this.findAndRestrictUserDetails(item[attribute], attributeData.target);
      }
    }
  }

  restrictWrappedItem(item, allowedFields) {
    const restrictedItem = { data: { id: item.data.id, attributes: {} } };
    for (const field of allowedFields) {
      if (field === "profile" && item.data.attributes[field]?.data) {
        restrictedItem.data.attributes[field] = this.restrictWrappedItem(item.data.attributes[field], this.config.allowedProfileFields);
      } else if (item.data.attributes[field]) {
        restrictedItem.data.attributes[field] = item.data.attributes[field];
      }
    }
    return restrictedItem;
  }

  restrictNonWrappedItem(item, allowedFields) {
    const restrictedItem = {};
    for (const field of allowedFields) {
      if (field === "profile" && item[field]) {
        restrictedItem[field] = this.restrictNonWrappedItem(item[field], this.config.allowedProfileFields);
      } else if (item[field]) {
        restrictedItem[field] = item[field];
      }
    }
    return restrictedItem;
  }

  restrictFields(response, modelName, action, user) {
    if (modelName === "user" && action === "me") {
      return response;
    }
    if (modelName === "user" && action === 'findOne' && response?.id === user.id) {
      return response;
    }
    if (modelName === "api::profile.profile" && action === 'findOne' && response?.data?.attributes?.user?.data?.id === user.id) {
      return response;
    }
    return this.findAndRestrictUserDetails(response, modelName);
  }
}


