export declare const clipboard: {
    read: () => Promise<string>;
    write: (value: string) => Promise<boolean>;
};
interface DeviceInfo {
    os: string;
    browser: string;
    device: string;
}
export declare function checkDeviceType(types?: string[], return_string?: boolean): DeviceInfo | string;
export {};
