"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMiddleware = void 0;
const runMiddleware = async (context, middlewares) => {
    if (!middlewares.length) {
        return;
    }
    const cb = middlewares[0];
    await cb(context, async (newContext) => {
        await (0, exports.runMiddleware)(newContext, middlewares.slice(1));
    });
};
exports.runMiddleware = runMiddleware;
//# sourceMappingURL=middleware.js.map