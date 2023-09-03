"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const lodash_1 = __importDefault(require("lodash"));
module.exports = (ctx) => {
    if (!ctx.is('multipart')) {
        return { data: ctx.request.body, files: {} };
    }
    const { body = {}, files = {} } = ctx.request;
    if (!body.data) {
        return ctx.badRequest(`When using multipart/form-data you need to provide your data in a JSON 'data' field.`);
    }
    let data;
    try {
        data = JSON.parse(body.data);
    }
    catch (error) {
        return ctx.badRequest(`Invalid 'data' field. 'data' should be a valid JSON.`);
    }
    const filesToUpload = Object.keys(files).reduce((acc, key) => {
        const fullPath = lodash_1.default.toPath(key);
        if (fullPath.length <= 1 || fullPath[0] !== 'files') {
            return ctx.badRequest(`When using multipart/form-data you need to provide your files by prefixing them with the 'files'.
For example, when a media file is named "avatar", make sure the form key name is "files.avatar"`);
        }
        const path = lodash_1.default.tail(fullPath);
        acc[path.join('.')] = files[key];
        return acc;
    }, {});
    return {
        data,
        files: filesToUpload,
    };
};
//# sourceMappingURL=parse-multipart.js.map