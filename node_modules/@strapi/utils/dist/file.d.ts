/// <reference types="node" />
/**
 * Utils file containing file treatment utils
 */
import { Readable, Writable, WritableOptions } from 'node:stream';
declare const kbytesToBytes: (kbytes: number) => number;
declare const bytesToKbytes: (bytes: number) => number;
declare const bytesToHumanReadable: (bytes: number) => string;
declare const streamToBuffer: (stream: Readable) => Promise<unknown>;
declare const getStreamSize: (stream: Readable) => Promise<unknown>;
/**
 * Create a writeable Node.js stream that discards received data.
 * Useful for testing, draining a stream of data, etc.
 */
declare function writableDiscardStream(options: WritableOptions): Writable;
export { streamToBuffer, bytesToHumanReadable, bytesToKbytes, kbytesToBytes, getStreamSize, writableDiscardStream, };
