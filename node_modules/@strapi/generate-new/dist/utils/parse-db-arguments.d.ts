import type { Scope, NewOptions } from '../types';
interface Options {
    scope: Scope;
    args: Partial<NewOptions>;
}
export default function parseDatabaseArguments({ scope, args }: Options): undefined;
export {};
