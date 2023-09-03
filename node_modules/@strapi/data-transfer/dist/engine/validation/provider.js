"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProvider = void 0;
const fp_1 = require("lodash/fp");
const errors_1 = require("../errors");
const reject = (reason) => {
    throw new errors_1.TransferEngineValidationError(`Invalid provider supplied. ${reason}`);
};
const validateProvider = (type, provider) => {
    if (!provider) {
        return reject(`Expected an instance of "${(0, fp_1.capitalize)(type)}Provider", but got "${typeof provider}" instead.`);
    }
    if (provider.type !== type) {
        return reject(`Expected the provider to be of type "${type}" but got "${provider.type}" instead.`);
    }
};
exports.validateProvider = validateProvider;
//# sourceMappingURL=provider.js.map