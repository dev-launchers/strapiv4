"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationWriteStream = exports.restoreConfigs = void 0;
const fp_1 = require("lodash/fp");
const stream_1 = require("stream");
const chalk_1 = __importDefault(require("chalk"));
const providers_1 = require("../../../../../errors/providers");
const omitInvalidCreationAttributes = (0, fp_1.omit)(['id']);
const restoreCoreStore = async (strapi, values) => {
    const data = omitInvalidCreationAttributes(values);
    return strapi.db.query('strapi::core-store').create({
        data: {
            ...data,
            value: JSON.stringify(data.value),
        },
    });
};
const restoreWebhooks = async (strapi, values) => {
    const data = omitInvalidCreationAttributes(values);
    return strapi.db.query('webhook').create({ data });
};
const restoreConfigs = async (strapi, config) => {
    if (config.type === 'core-store') {
        return restoreCoreStore(strapi, config.value);
    }
    if (config.type === 'webhook') {
        return restoreWebhooks(strapi, config.value);
    }
};
exports.restoreConfigs = restoreConfigs;
const createConfigurationWriteStream = async (strapi, transaction) => {
    return new stream_1.Writable({
        objectMode: true,
        async write(config, _encoding, callback) {
            await transaction?.attach(async () => {
                try {
                    await (0, exports.restoreConfigs)(strapi, config);
                }
                catch (error) {
                    return callback(new providers_1.ProviderTransferError(`Failed to import ${chalk_1.default.yellowBright(config.type)} (${chalk_1.default.greenBright(config.value.id)}`));
                }
                callback();
            });
        },
    });
};
exports.createConfigurationWriteStream = createConfigurationWriteStream;
//# sourceMappingURL=configuration.js.map