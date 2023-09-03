import type { NewOptions } from './types';
export { default as checkInstallPath } from './utils/check-install-path';
export declare const generateNewApp: (projectDirectory: string, options: Partial<NewOptions>) => Promise<void>;
