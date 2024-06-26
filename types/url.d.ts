export declare const url: {
    getQuery(name: string): string;
    getHash(name: string): string;
    getPath(isFullPath?: boolean): string;
    setPath(path: string): boolean;
    setHash(hash: string): boolean;
    setQuery(name: string, value: string): boolean;
    removeQuery(name: string): boolean;
    removeHash(): boolean;
};
export declare function getPreURL(): any;
