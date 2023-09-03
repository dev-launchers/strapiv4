import type { Question } from 'inquirer';
import type { Scope } from '../types';
interface QuestionFactory {
    (options: {
        scope: Scope;
        client: 'postgres' | 'mysql' | 'sqlite';
    }): Question;
}
declare const _default: {
    sqlite: QuestionFactory[];
    postgres: QuestionFactory[];
    mysql: QuestionFactory[];
};
export default _default;
