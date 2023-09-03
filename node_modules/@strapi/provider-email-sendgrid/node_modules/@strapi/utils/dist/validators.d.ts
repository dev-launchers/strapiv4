import * as yup from 'yup';
declare const MixedSchemaType: typeof import("yup/lib/mixed").MixedSchema;
declare class StrapiIDSchema extends MixedSchemaType {
    constructor();
    _typeCheck(value: unknown): value is string | number;
}
declare const handleYupError: (error: yup.ValidationError, errorMessage: string) => never;
declare const validateYupSchema: (schema: yup.AnySchema, options?: {}) => (body: unknown, errorMessage: string) => Promise<any>;
declare const validateYupSchemaSync: (schema: yup.AnySchema, options?: {}) => (body: unknown, errorMessage: string) => any;
declare const customYup: typeof yup & {
    strapiID: () => InstanceType<typeof StrapiIDSchema>;
};
export { customYup as yup, StrapiIDSchema, handleYupError, validateYupSchema, validateYupSchemaSync, };
