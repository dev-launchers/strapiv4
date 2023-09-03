"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachAsync = exports.reduceAsync = exports.mapAsync = exports.pipeAsync = void 0;
const p_map_1 = __importDefault(require("p-map"));
const fp_1 = require("lodash/fp");
function pipeAsync(...fns) {
    const [firstFn, ...fnRest] = fns;
    return async (...args) => {
        let res = await firstFn.apply(firstFn, args);
        for (let i = 0; i < fnRest.length; i += 1) {
            res = await fnRest[i](res);
        }
        return res;
    };
}
exports.pipeAsync = pipeAsync;
exports.mapAsync = (0, fp_1.curry)(p_map_1.default);
const reduceAsync = (mixedArray) => async (iteratee, initialValue) => {
    let acc = initialValue;
    for (let i = 0; i < mixedArray.length; i += 1) {
        acc = await iteratee(acc, await mixedArray[i], i);
    }
    return acc;
};
exports.reduceAsync = reduceAsync;
const forEachAsync = async (array, func, options) => {
    await (0, p_map_1.default)(array, func, options);
};
exports.forEachAsync = forEachAsync;
//# sourceMappingURL=async.js.map