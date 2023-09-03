/// <reference types="koa" />
/// <reference types="formidable" />
import type { Context } from './types';
declare const _default: (ctx: Context) => import("koa").Context | {
    data: any;
    files: import("formidable").Files;
};
export = _default;
