export declare const notificationPermission: {
    check: () => boolean;
    request: () => Promise<boolean>;
};
export declare const clipboardPermission: {
    check: () => Promise<boolean | null>;
    request: () => Promise<boolean>;
};
export declare const locationPermission: {
    check: () => Promise<boolean | null>;
    request: () => Promise<boolean>;
};
export declare const cameraPermission: {
    check: () => Promise<boolean | null>;
    request: () => Promise<boolean>;
};
export declare const microphonePermission: {
    check: () => Promise<boolean | null>;
    request: () => Promise<boolean>;
};
