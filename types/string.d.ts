export declare function checkNull(val: any): boolean;
export declare function checkNotNull(val: any): boolean;
export declare function strLength(str: string): number;
export declare function formatBytes(bytes: number, { decimals, from, to }?: {
    decimals?: number;
    from?: string;
    to?: string;
}): string;
export declare function checkPassword(password: string, { minLength, maxLength, types, minTypes, maxTypes }?: {
    minLength?: number;
    maxLength?: number;
    types?: string[];
    minTypes?: number;
    maxTypes?: number;
}): boolean;
export declare function checkEmail(email: string): boolean;
export declare function encode62(num: number): string;
export declare function decode62(str: string | number): number;
export declare function getFileNameFromURL(url: string): string;
export declare function getFileExtFromString(str: string): string;
export declare function spliceSiteTitle({ title, siteName, separator, reverse }?: {
    title?: string;
    siteName?: string;
    separator?: string;
    reverse?: boolean;
}): string;
