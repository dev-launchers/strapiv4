import pMap from 'p-map';
type AnyFunc = (...args: any) => any;
type PipeArgs<F extends AnyFunc[], PrevReturn = Parameters<F[0]>[0]> = F extends [
    (arg: any) => infer B
] ? [(arg: PrevReturn) => B] : F extends [(arg: any) => infer B, ...infer Tail] ? Tail extends AnyFunc[] ? [(arg: PrevReturn) => B, ...PipeArgs<Tail, B>] : [] : [];
export declare function pipeAsync<F extends AnyFunc[], FirstFn extends F[0]>(...fns: PipeArgs<F> extends F ? F : PipeArgs<F>): (...args: Parameters<FirstFn>) => Promise<F extends [...AnyFunc[], (...arg: any) => infer R] ? R extends Promise<infer InnerType> ? InnerType : R : never>;
export declare const mapAsync: (...args: any[]) => any;
export declare const reduceAsync: (mixedArray: any[]) => <T>(iteratee: AnyFunc, initialValue?: T | undefined) => Promise<T | undefined>;
export declare const forEachAsync: <T, R>(array: T[], func: pMap.Mapper<T, R>, options: pMap.Options) => Promise<void>;
export {};
