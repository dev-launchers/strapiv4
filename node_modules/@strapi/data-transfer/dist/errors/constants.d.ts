import { ErrorDiagnosticSeverity } from '../engine/diagnostic';
export declare const SeverityKind: Record<string, ErrorDiagnosticSeverity>;
export type Severity = (typeof SeverityKind)[keyof typeof SeverityKind];
