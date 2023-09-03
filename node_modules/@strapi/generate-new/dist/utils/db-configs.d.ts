/**
 * Default db infos
 */
declare const _default: {
    sqlite: {
        connection: {
            filename: string;
        };
        useNullAsDefault: boolean;
    };
    postgres: {};
    mysql: {};
};
export default _default;
