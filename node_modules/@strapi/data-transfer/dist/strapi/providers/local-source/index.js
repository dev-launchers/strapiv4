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
exports.createLocalStrapiSourceProvider = void 0;
const stream_chain_1 = require("stream-chain");
const stream_1 = require("stream");
const entities_1 = require("./entities");
const links_1 = require("./links");
const configuration_1 = require("./configuration");
const assets_1 = require("./assets");
const utils = __importStar(require("../../../utils"));
const providers_1 = require("../../../utils/providers");
const createLocalStrapiSourceProvider = (options) => {
    return new LocalStrapiSourceProvider(options);
};
exports.createLocalStrapiSourceProvider = createLocalStrapiSourceProvider;
class LocalStrapiSourceProvider {
    constructor(options) {
        this.name = 'source::local-strapi';
        this.type = 'source';
        this.options = options;
    }
    async bootstrap() {
        this.strapi = await this.options.getStrapi();
    }
    async close() {
        const { autoDestroy } = this.options;
        // Basically `!== false` but more deterministic
        if (autoDestroy === undefined || autoDestroy === true) {
            await this.strapi?.destroy();
        }
    }
    getMetadata() {
        const strapiVersion = strapi.config.get('info.strapi');
        const createdAt = new Date().toISOString();
        return {
            createdAt,
            strapi: {
                version: strapiVersion,
            },
        };
    }
    async createEntitiesReadStream() {
        (0, providers_1.assertValidStrapi)(this.strapi, 'Not able to stream entities');
        return (0, stream_chain_1.chain)([
            // Entities stream
            (0, entities_1.createEntitiesStream)(this.strapi),
            // Transform stream
            (0, entities_1.createEntitiesTransformStream)(),
        ]);
    }
    createLinksReadStream() {
        (0, providers_1.assertValidStrapi)(this.strapi, 'Not able to stream links');
        return (0, links_1.createLinksStream)(this.strapi);
    }
    createConfigurationReadStream() {
        (0, providers_1.assertValidStrapi)(this.strapi, 'Not able to stream configuration');
        return (0, configuration_1.createConfigurationStream)(strapi);
    }
    getSchemas() {
        (0, providers_1.assertValidStrapi)(this.strapi, 'Not able to get Schemas');
        const schemas = {
            ...this.strapi.contentTypes,
            ...this.strapi.components,
        };
        return utils.schema.mapSchemasValues(schemas);
    }
    createSchemasReadStream() {
        return stream_1.Readable.from(Object.values(this.getSchemas()));
    }
    createAssetsReadStream() {
        (0, providers_1.assertValidStrapi)(this.strapi, 'Not able to stream assets');
        return (0, assets_1.createAssetsStream)(this.strapi);
    }
}
//# sourceMappingURL=index.js.map