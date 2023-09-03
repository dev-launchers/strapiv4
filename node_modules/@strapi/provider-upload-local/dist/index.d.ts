/// <reference types="node" />
/// <reference types="node" />
import { ReadStream } from 'fs';
interface File {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext?: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    path?: string;
    provider?: string;
    provider_metadata?: Record<string, unknown>;
    stream?: ReadStream;
    buffer?: Buffer;
}
interface InitOptions {
    sizeLimit?: number;
}
interface CheckFileSizeOptions {
    sizeLimit?: number;
}
declare const _default: {
    init({ sizeLimit: providerOptionsSizeLimit }?: InitOptions): {
        checkFileSize(file: File, options: CheckFileSizeOptions): void;
        uploadStream(file: File): Promise<void>;
        upload(file: File): Promise<void>;
        delete(file: File): Promise<string | void>;
    };
};
export = _default;
