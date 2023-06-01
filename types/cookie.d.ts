export declare const localCookie: {
    getItem: (sKey: string) => string | null;
    setItem: (sKey: string, sValue: string, sPath?: string, sDomain?: string, vEnd?: number | string | Date, bSecure?: boolean) => boolean;
    removeItem: (sKey: string, sPath?: string, sDomain?: string) => boolean;
    hasItem: (sKey: string) => boolean;
    keys: () => string[];
    clear: () => void;
};
