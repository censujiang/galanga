import Cookies from 'js-cookie';
export declare const localCookie: {
    getItem: {
        (name: string): string;
        (): {
            [key: string]: string;
        };
    };
    setItem: (name: string, value: string, options?: Cookies.CookieAttributes) => string;
    removeItem: (name: string, options?: Cookies.CookieAttributes) => void;
    keys(): string[];
    clear(): void;
};
