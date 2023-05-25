export declare const clipboard: {
    read: (onlyString?: boolean) => Promise<string | ClipboardItems>;
    write: (value: any, onlyString?: boolean) => Promise<boolean>;
};
interface DeviceInfo {
    os: string;
    browser: string;
    device: string;
}
export declare function checkDeviceType(types?: string[], return_string?: boolean): DeviceInfo | string;
export {};
