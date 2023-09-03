import { WebSocket } from 'ws';
import type { Client } from '../../../types/remote/protocol';
interface IDispatcherState {
    transfer?: {
        kind: Client.TransferKind;
        id: string;
    };
}
interface IDispatchOptions {
    attachTransfer?: boolean;
}
type Dispatch<T> = Omit<T, 'transferID' | 'uuid'>;
export declare const createDispatcher: (ws: WebSocket, retryMessageOptions?: {
    retryMessageMaxRetries: number;
    retryMessageTimeout: number;
}) => {
    readonly transferID: string | undefined;
    readonly transferKind: "push" | "pull" | undefined;
    setTransferProperties: (properties: Exclude<IDispatcherState['transfer'], undefined>) => void;
    dispatch: <U = null>(message: Dispatch<Client.Message>, options?: IDispatchOptions) => Promise<U | null>;
    dispatchCommand: <U_1 extends "end" | "init" | "status">(payload: {
        command: U_1;
    } & ([Client.GetCommandParams<U_1>] extends [never] ? unknown : {
        params?: Client.GetCommandParams<U_1> | undefined;
    })) => Promise<null>;
    dispatchTransferAction: <T>(action: Client.Action['action']) => Promise<T | null>;
    dispatchTransferStep: <T_1, A extends "stream" | "end" | "start" = "stream" | "end" | "start", S extends "entities" | "links" | "configuration" | "assets" = "entities" | "links" | "configuration" | "assets">(payload: {
        step: S;
        action: A;
    } & (A extends "stream" ? {
        data: Client.GetTransferPushStreamData<S>;
    } : unknown)) => Promise<T_1 | null>;
};
type WebsocketParams = ConstructorParameters<typeof WebSocket>;
type Address = WebsocketParams[0];
type Options = WebsocketParams[2];
export declare const connectToWebsocket: (address: Address, options?: Options) => Promise<WebSocket>;
export declare const trimTrailingSlash: (input: string) => string;
export {};
