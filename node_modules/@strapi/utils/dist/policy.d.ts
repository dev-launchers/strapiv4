/**
 * Policies util
 */
import type { Context } from './types';
interface PolicyInfo {
    name: string;
    config: unknown;
}
type PolicyConfig = string | PolicyInfo | (() => PolicyInfo);
interface PolicyContext {
    pluginName?: string;
    apiName?: string;
}
interface RouteInfo {
    method: string;
    endpoint: string;
    controller: string;
    action: string;
    plugin: string;
}
declare const globalPolicy: ({ method, endpoint, controller, action, plugin }: RouteInfo) => (ctx: Context, next: () => void) => Promise<void>;
declare const resolvePolicies: (config: PolicyInfo[], policyContext: PolicyContext) => {
    handler: any;
    config: {};
}[];
declare const getPolicy: (policyConfig: PolicyConfig, policyContext?: PolicyContext) => any;
interface Options {
    name: string;
    validator?(config: unknown): void;
    handler(...args: any[]): any;
}
declare const createPolicy: (options: Options) => {
    name: string;
    validator: (config: unknown) => void;
    handler: (...args: any[]) => any;
};
declare const createPolicyContext: (type: string, ctx: object) => {
    is: import("lodash/fp").LodashEq1x1;
    readonly type: string;
} & object;
export { getPolicy as get, resolvePolicies as resolve, globalPolicy, createPolicy, createPolicyContext, };
