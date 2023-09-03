import { Scope } from '../../../types';
type OptsScope = Pick<Scope, 'strapiDependencies' | 'additionalsDependencies' | 'strapiVersion' | 'uuid' | 'packageJsonStrapi'>;
interface Opts extends OptsScope {
    projectName: string;
}
declare const _default: (opts: Opts) => {
    name: string;
    private: boolean;
    version: string;
    description: string;
    scripts: {
        develop: string;
        start: string;
        build: string;
        strapi: string;
    };
    devDependencies: {};
    dependencies: {
        [x: string]: string;
    };
    author: {
        name: string;
    };
    strapi: {
        uuid: string | undefined;
    };
    engines: {
        node: string;
        npm: string;
    };
    license: string;
};
export default _default;
