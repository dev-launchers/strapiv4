"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictedFields = exports.allowedFields = exports.removeDynamicZones = exports.removeMorphToRelations = exports.removeRestrictedRelations = exports.removePrivate = exports.removePassword = void 0;
var remove_password_1 = require("./remove-password");
Object.defineProperty(exports, "removePassword", { enumerable: true, get: function () { return __importDefault(remove_password_1).default; } });
var remove_private_1 = require("./remove-private");
Object.defineProperty(exports, "removePrivate", { enumerable: true, get: function () { return __importDefault(remove_private_1).default; } });
var remove_restricted_relations_1 = require("./remove-restricted-relations");
Object.defineProperty(exports, "removeRestrictedRelations", { enumerable: true, get: function () { return __importDefault(remove_restricted_relations_1).default; } });
var remove_morph_to_relations_1 = require("./remove-morph-to-relations");
Object.defineProperty(exports, "removeMorphToRelations", { enumerable: true, get: function () { return __importDefault(remove_morph_to_relations_1).default; } });
var remove_dynamic_zones_1 = require("./remove-dynamic-zones");
Object.defineProperty(exports, "removeDynamicZones", { enumerable: true, get: function () { return __importDefault(remove_dynamic_zones_1).default; } });
var allowed_fields_1 = require("./allowed-fields");
Object.defineProperty(exports, "allowedFields", { enumerable: true, get: function () { return __importDefault(allowed_fields_1).default; } });
var restricted_fields_1 = require("./restricted-fields");
Object.defineProperty(exports, "restrictedFields", { enumerable: true, get: function () { return __importDefault(restricted_fields_1).default; } });
//# sourceMappingURL=index.js.map