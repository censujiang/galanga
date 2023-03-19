export declare function checkNull(val: any): boolean;
export declare function strLength(str: string): number;
export declare function formatBytes(bytes: number, { decimals, from, to }?: {
    decimals?: number;
    from?: string;
    to?: string;
}): any;
export declare function checkPassword(password: string, { minLength, maxLength, types, minTypes, maxTypes }?: {
    minLength?: number;
    maxLength?: number;
    types?: string[];
    minTypes?: number;
    maxTypes?: number;
}): boolean;
