export declare const localCookie: {
    getItem: (sKey: any) => string;
    setItem: (sKey: any, sValue: any, vEnd: any, sPath: any, sDomain: any, bSecure: any) => boolean;
    removeItem: (sKey: any, sPath: any, sDomain: any) => boolean;
    hasItem: (sKey: any) => boolean;
    keys: () => string[];
    clear: () => void;
};
