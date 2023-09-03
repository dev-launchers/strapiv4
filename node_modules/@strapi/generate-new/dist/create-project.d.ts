import { Configuration, Scope } from './types';
export default function createProject(scope: Scope, { client, connection, dependencies }: Configuration): Promise<void>;
