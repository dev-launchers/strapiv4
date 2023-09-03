"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
const hooks_1 = require("./hooks");
/**
 * Creates a new object containing various hooks used by the providers
 */
const createProviderHooksMap = () => ({
    // Register events
    willRegister: (0, hooks_1.createAsyncSeriesHook)(),
    didRegister: (0, hooks_1.createAsyncParallelHook)(),
    // Delete events
    willDelete: (0, hooks_1.createAsyncParallelHook)(),
    didDelete: (0, hooks_1.createAsyncParallelHook)(),
});
/**
 * A Provider factory
 */
const providerFactory = (options = {}) => {
    const { throwOnDuplicates = true } = options;
    const state = {
        hooks: createProviderHooksMap(),
        registry: new Map(),
    };
    return {
        hooks: state.hooks,
        async register(key, item) {
            if (throwOnDuplicates && this.has(key)) {
                throw new Error(`Duplicated item key: ${key}`);
            }
            await state.hooks.willRegister.call({ key, value: item });
            state.registry.set(key, item);
            await state.hooks.didRegister.call({ key, value: (0, fp_1.cloneDeep)(item) });
            return this;
        },
        async delete(key) {
            if (this.has(key)) {
                const item = this.get(key);
                await state.hooks.willDelete.call({ key, value: (0, fp_1.cloneDeep)(item) });
                state.registry.delete(key);
                await state.hooks.didDelete.call({ key, value: (0, fp_1.cloneDeep)(item) });
            }
            return this;
        },
        get(key) {
            return state.registry.get(key);
        },
        getWhere(filters = {}) {
            const items = this.values();
            const filtersEntries = Object.entries(filters);
            if (filtersEntries.length === 0) {
                return items;
            }
            return items.filter((item) => {
                return filtersEntries.every(([key, value]) => item[key] === value);
            });
        },
        values() {
            return Array.from(state.registry.values());
        },
        keys() {
            return Array.from(state.registry.keys());
        },
        has(key) {
            return state.registry.has(key);
        },
        size() {
            return state.registry.size;
        },
        async clear() {
            const keys = this.keys();
            for (const key of keys) {
                await this.delete(key);
            }
            return this;
        },
    };
};
exports.default = providerFactory;
//# sourceMappingURL=provider-factory.js.map