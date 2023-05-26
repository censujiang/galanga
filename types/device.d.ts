export declare const clipboard: {
    read: (onlyString?: boolean) => Promise<string | ClipboardItems>;
    write: (value: any, onlyString?: boolean) => Promise<boolean>;
};
interface DeviceInfo {
    os: string;
    browser: string;
    device: string;
    platform: string;
}
export declare function checkDeviceType(types?: string[] | string): DeviceInfo | string | object;
export {};
