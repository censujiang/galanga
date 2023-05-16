export declare const localCookie: {
    getItem: (sKey: string) => string | null;
    setItem: (sKey: string, sValue: string, vEnd?: number | string | Date, sPath?: string, sDomain?: string, bSecure?: boolean) => void;
    removeItem: (sKey: string, sPath: string, sDomain: string) => void | boolean;
    hasItem: (sKey: string) => boolean;
    keys: () => string[];
    clear: () => void;
};
