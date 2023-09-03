export declare const runCLI: () => void;
export declare const generate: (generatorName: string, options: unknown, { dir, plopFile }?: {
    dir?: string | undefined;
    plopFile?: string | undefined;
}) => Promise<void>;
