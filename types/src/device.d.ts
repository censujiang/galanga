interface DeviceInfo {
    os: string;
    browser: string;
    device: string;
}
export declare function checkDeviceType(types?: string[], return_string?: boolean): DeviceInfo | string;
export {};
