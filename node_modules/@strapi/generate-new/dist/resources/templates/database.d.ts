import type { DatabaseInfo } from '../../types';
export declare const createDatabaseConfig: ({ useTypescript }: {
    useTypescript: boolean;
}) => string;
export declare const generateDbEnvariables: ({ connection, client, }: {
    connection: DatabaseInfo;
    client: string;
}) => string;
