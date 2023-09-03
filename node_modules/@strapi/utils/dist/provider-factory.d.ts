import { AsyncSeriesHook, AsyncParallelHook } from './hooks';
interface ProviderHooksMap {
    willRegister: AsyncSeriesHook;
    didRegister: AsyncParallelHook;
    willDelete: AsyncParallelHook;
    didDelete: AsyncParallelHook;
}
export interface Options {
    throwOnDuplicates?: boolean;
}
type Item = Record<string, unknown>;
export interface Provider {
    hooks: ProviderHooksMap;
    register(key: string, item: Item): Promise<Provider>;
    delete(key: string): Promise<Provider>;
    get(key: string): Item | undefined;
    getWhere(filters?: Record<string, unknown>): Item[];
    values(): Item[];
    keys(): string[];
    has(key: string): boolean;
    size(): number;
    clear(): Promise<Provider>;
}
export type ProviderFactory = (options?: Options) => Provider;
/**
 * A Provider factory
 */
declare const providerFactory: ProviderFactory;
export default providerFactory;
