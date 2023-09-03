import type { ClientName } from '../types';
/**
 * Client dependencies
 */
declare const _default: ({ client }: {
    client: ClientName;
}) => {
    mysql: string;
} | {
    mysql2: string;
} | {
    pg: string;
} | {
    'better-sqlite3': string;
} | {
    sqlite3: string;
};
export default _default;
