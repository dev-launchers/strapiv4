import type { Model, Kind, Attribute, RelationalAttribute, ComponentAttribute, DynamicZoneAttribute } from './types';
declare const constants: {
    ID_ATTRIBUTE: string;
    PUBLISHED_AT_ATTRIBUTE: string;
    CREATED_BY_ATTRIBUTE: string;
    UPDATED_BY_ATTRIBUTE: string;
    CREATED_AT_ATTRIBUTE: string;
    UPDATED_AT_ATTRIBUTE: string;
    DP_PUB_STATES: string[];
    DP_PUB_STATE_LIVE: string;
    DP_PUB_STATE_PREVIEW: string;
    SINGLE_TYPE: string;
    COLLECTION_TYPE: string;
};
declare const getTimestamps: (model: Model) => string[];
declare const getNonWritableAttributes: (model: Model) => string[];
declare const getWritableAttributes: (model: Model) => string[];
declare const isWritableAttribute: (model: Model, attributeName: string) => boolean;
declare const getNonVisibleAttributes: (model: Model) => string[];
declare const getVisibleAttributes: (model: Model) => string[];
declare const isVisibleAttribute: (model: Model, attributeName: string) => boolean;
declare const getOptions: (model: Model) => {
    draftAndPublish: boolean;
} | ({
    draftAndPublish: boolean;
} & {
    populateCreatorFields: boolean;
});
declare const hasDraftAndPublish: (model: Model) => boolean;
declare const isDraft: <T extends object>(data: T, model: Model) => boolean;
declare const isSingleType: ({ kind }: {
    kind?: string | undefined;
}) => boolean;
declare const isCollectionType: ({ kind }: {
    kind?: string | undefined;
}) => boolean;
declare const isKind: (kind: Kind) => (model: Model) => boolean;
declare const getPrivateAttributes: (model: Model) => string[];
declare const isPrivateAttribute: (model: Model, attributeName: string) => boolean;
declare const isScalarAttribute: (attribute: Attribute) => boolean;
declare const isMediaAttribute: (attribute: Attribute) => boolean;
declare const isRelationalAttribute: (attribute: Attribute) => attribute is RelationalAttribute;
declare const isComponentAttribute: (attribute: Attribute) => attribute is ComponentAttribute;
declare const isDynamicZoneAttribute: (attribute: Attribute) => attribute is DynamicZoneAttribute;
declare const isMorphToRelationalAttribute: (attribute: Attribute) => boolean;
declare const getComponentAttributes: (schema: Model) => string[];
declare const getScalarAttributes: (schema: Model) => string[];
/**
 * Checks if an attribute is of type `type`
 * @param {object} attribute
 * @param {string} type
 */
declare const isTypedAttribute: (attribute: Attribute, type: string) => boolean;
/**
 *  Returns a route prefix for a contentType
 * @param {object} contentType
 * @returns {string}
 */
declare const getContentTypeRoutePrefix: (contentType: Model) => string;
export { isScalarAttribute, isMediaAttribute, isRelationalAttribute, isComponentAttribute, isDynamicZoneAttribute, isMorphToRelationalAttribute, isTypedAttribute, getPrivateAttributes, isPrivateAttribute, constants, getNonWritableAttributes, getComponentAttributes, getScalarAttributes, getWritableAttributes, isWritableAttribute, getNonVisibleAttributes, getVisibleAttributes, getTimestamps, isVisibleAttribute, hasDraftAndPublish, getOptions, isDraft, isSingleType, isCollectionType, isKind, getContentTypeRoutePrefix, };
