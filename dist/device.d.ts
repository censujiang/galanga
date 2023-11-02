export declare const clipboard: {
    read: (onlyString?: boolean) => Promise<string | ClipboardItems>;
    write: (value: any) => Promise<boolean>;
};
interface DeviceInfo {
    os: string;
    browser: string;
    device: string;
    platform: string;
}
export declare function checkDeviceType(types?: string[] | string): DeviceInfo | string | object;
export declare function share({ content, title, url, type, //仅为兼容其他平台，无实际作用
files, }?: {
    content?: string;
    title?: string;
    url?: string;
    type?: string;
    files?: File[];
}): void;
export {};
