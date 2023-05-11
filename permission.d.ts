export declare const notificationPermission: {
    check: () => boolean;
    request: () => Promise<boolean>;
};
export declare const clipboardPermission: {
    check: () => Promise<boolean>;
    request: () => Promise<boolean>;
};
