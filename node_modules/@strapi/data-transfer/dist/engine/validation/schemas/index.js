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
exports.compareSchemas = void 0;
const fp_1 = require("lodash/fp");
const utils = __importStar(require("../../../utils"));
const OPTIONAL_CONTENT_TYPES = ['audit-log'];
const isAttributeIgnorable = (diff) => {
    return (diff.path.length === 3 &&
        // Root property must be attributes
        diff.path[0] === 'attributes' &&
        // Need a valid string attribute name
        typeof diff.path[1] === 'string' &&
        // The diff must be on ignorable attribute properties
        ['private', 'required', 'configurable'].includes(diff.path[2]));
};
// TODO: clean up the type checking, which will require cleaning up the typings in utils/json.ts
// exclude admin tables that are not transferrable and are optionally available (such as audit logs which are only available in EE)
const isOptionalAdminType = (diff) => {
    if ('value' in diff && (0, fp_1.isObject)(diff.value)) {
        const name = diff?.value?.info?.singularName;
        return OPTIONAL_CONTENT_TYPES.includes(name);
    }
    if ('values' in diff && (0, fp_1.isArray)(diff.values) && (0, fp_1.isObject)(diff.values[0])) {
        const name = diff?.values[0]?.info?.singularName;
        return OPTIONAL_CONTENT_TYPES.includes(name);
    }
    return false;
};
const isIgnorableStrict = (diff) => isAttributeIgnorable(diff) || isOptionalAdminType(diff);
const strategies = {
    // No diffs
    exact(diffs) {
        return diffs;
    },
    // Strict: all content types must match except:
    // - the property within a content type is an ignorable one
    // - those that are (not transferrable and optionally available), for example EE features such as audit logs
    strict(diffs) {
        return (0, fp_1.reject)(isIgnorableStrict, diffs);
    },
};
const compareSchemas = (a, b, strategy) => {
    const diffs = utils.json.diff(a, b);
    return strategies[strategy](diffs);
};
exports.compareSchemas = compareSchemas;
//# sourceMappingURL=index.js.map