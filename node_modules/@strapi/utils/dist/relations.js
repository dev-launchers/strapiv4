"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnyToMany = exports.isAnyToOne = exports.isManyToAny = exports.isOneToAny = exports.getRelationalFields = exports.constants = void 0;
const content_types_1 = require("./content-types");
const MANY_RELATIONS = ['oneToMany', 'manyToMany'];
const getRelationalFields = (contentType) => {
    return Object.keys(contentType.attributes).filter((attributeName) => {
        return contentType.attributes[attributeName].type === 'relation';
    });
};
exports.getRelationalFields = getRelationalFields;
const isOneToAny = (attribute) => (0, content_types_1.isRelationalAttribute)(attribute) && ['oneToOne', 'oneToMany'].includes(attribute.relation);
exports.isOneToAny = isOneToAny;
const isManyToAny = (attribute) => (0, content_types_1.isRelationalAttribute)(attribute) && ['manyToMany', 'manyToOne'].includes(attribute.relation);
exports.isManyToAny = isManyToAny;
const isAnyToOne = (attribute) => (0, content_types_1.isRelationalAttribute)(attribute) && ['oneToOne', 'manyToOne'].includes(attribute.relation);
exports.isAnyToOne = isAnyToOne;
const isAnyToMany = (attribute) => (0, content_types_1.isRelationalAttribute)(attribute) && ['oneToMany', 'manyToMany'].includes(attribute.relation);
exports.isAnyToMany = isAnyToMany;
exports.constants = {
    MANY_RELATIONS,
};
//# sourceMappingURL=relations.js.map