import type { Config } from './types';
export declare const getConfigUrls: (config: Config, forAdminBuild?: boolean) => {
    serverUrl: string;
    adminUrl: any;
    adminPath: any;
};
export declare const getAbsoluteAdminUrl: (config: Config, forAdminBuild?: boolean) => any;
export declare const getAbsoluteServerUrl: (config: Config, forAdminBuild?: boolean) => any;
