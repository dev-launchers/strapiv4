export type ValidStrapiAssertion = (strapi: unknown, msg?: string) => asserts strapi is Strapi.Strapi;
export declare const assertValidStrapi: ValidStrapiAssertion;
