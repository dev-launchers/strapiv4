import type { PackageInfo } from '../types';
export declare function getTemplatePackageInfo(template: string): Promise<PackageInfo>;
export declare function downloadNpmTemplate({ name, version }: PackageInfo, parentDir: string): Promise<string>;
