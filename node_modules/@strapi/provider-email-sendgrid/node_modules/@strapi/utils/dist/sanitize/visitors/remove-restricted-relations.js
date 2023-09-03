"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const contentTypeUtils = __importStar(require("../../content-types"));
const ACTIONS_TO_VERIFY = ['find'];
const { CREATED_BY_ATTRIBUTE, UPDATED_BY_ATTRIBUTE } = contentTypeUtils.constants;
exports.default = (auth) => async ({ data, key, attribute, schema }, { remove, set }) => {
    if (!attribute) {
        return;
    }
    const isRelation = attribute.type === 'relation';
    if (!isRelation) {
        return;
    }
    const handleMorphRelation = async () => {
        const newMorphValue = [];
        for (const element of data[key]) {
            const scopes = ACTIONS_TO_VERIFY.map((action) => `${element.__type}.${action}`);
            const isAllowed = await hasAccessToSomeScopes(scopes, auth);
            if (isAllowed) {
                newMorphValue.push(element);
            }
        }
        // If the new value is empty, remove the relation completely
        if (newMorphValue.length === 0) {
            remove(key);
        }
        else {
            set(key, newMorphValue);
        }
    };
    const handleRegularRelation = async () => {
        const scopes = ACTIONS_TO_VERIFY.map((action) => `${attribute.target}.${action}`);
        const isAllowed = await hasAccessToSomeScopes(scopes, auth);
        // If the authenticated user don't have access to any of the scopes, then remove the field
        if (!isAllowed) {
            remove(key);
        }
    };
    const isCreatorRelation = [CREATED_BY_ATTRIBUTE, UPDATED_BY_ATTRIBUTE].includes(key);
    // Polymorphic relations
    if (contentTypeUtils.isMorphToRelationalAttribute(attribute)) {
        await handleMorphRelation();
        return;
    }
    // Creator relations
    if (isCreatorRelation && schema.options.populateCreatorFields) {
        // do nothing
        return;
    }
    // Regular relations
    await handleRegularRelation();
};
const hasAccessToSomeScopes = async (scopes, auth) => {
    for (const scope of scopes) {
        try {
            await strapi.auth.verify(auth, { scope });
            return true;
        }
        catch {
            continue;
        }
    }
    return false;
};
//# sourceMappingURL=remove-restricted-relations.js.map