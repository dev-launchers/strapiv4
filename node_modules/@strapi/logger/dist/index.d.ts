import * as winston from 'winston';
import * as configs from './configs';
export * as formats from './formats';
declare const createLogger: (userConfiguration?: winston.LoggerOptions) => winston.Logger;
export { createLogger, winston, configs };
