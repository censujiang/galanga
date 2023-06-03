export declare const url: {
    getQuery(name: string): string;
    getHash(name: string): string;
    getPath(): string;
    setPath(path: string): boolean;
    setHash(hash: string): boolean;
    setQuery(name: string, value: string): boolean;
};
export declare function getPreURL(): any;
