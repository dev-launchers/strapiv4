import { Scope, StderrError } from '../types';
type TrackError = Error | string | StderrError;
export declare function captureException(error: Error): Promise<void>;
export declare function captureStderr(name: string, error: unknown): Promise<void>;
export declare function trackError({ scope, error }: {
    scope: Scope;
    error?: TrackError;
}): Promise<void | import("node-fetch").Response>;
export declare function trackUsage({ event, scope, error, }: {
    event: string;
    scope: Scope;
    error?: TrackError;
}): Promise<void | import("node-fetch").Response>;
export {};
