//通知权限相关
export const notificationPermission = {
    //判断是否有通知权限
    check: () => {
        //判断浏览器是否支持Notification
        if (!('Notification' in window)) {
            return false;
        }
        else {
            if (Notification.permission === 'granted') {
                return true;
            }
            else if (Notification.permission === 'denied') {
                return false;
            }
            else {
                return null;
            }
        }
    },
    //请求通知权限
    request: async () => {
        let check = notificationPermission.check();
        if (check == null) {
            const info = await Notification.requestPermission();
            if (info === 'granted') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return check;
        }
    }
};
// 剪切板权限相关
export const clipboardPermission = {
    // 判断是否有剪切板权限
    check: async () => {
        // 判断浏览器是否支持Clipboard
        if (!('Clipboard' in window)) {
            return false;
        }
        else {
            // 尝试读取剪切板内容
            try {
                return await defaultW3PermissionQueryCheck("clipboard-write");
            }
            catch {
                return false;
            }
        }
    },
    // 请求剪切板权限
    request: async () => {
        let check = await clipboardPermission.check();
        if (check === null) {
            try {
                await navigator.clipboard.readText();
                return true;
            }
            catch {
                check = await clipboardPermission.check();
                return check === true;
            }
        }
        else {
            return check === true;
        }
    }
};
//位置权限相关
export const locationPermission = {
    //判断是否有位置权限
    check: async () => {
        //判断浏览器是否支持Geolocation
        if (!('geolocation' in navigator)) {
            return false;
        }
        else {
            //尝试获取位置信息
            try {
                return await defaultW3PermissionQueryCheck("geolocation");
            }
            catch {
                return false;
            }
        }
    },
    //请求位置权限
    request: async () => {
        let check = await locationPermission.check();
        if (check === null) {
            try {
                await navigator.geolocation.getCurrentPosition(() => { });
                return true;
            }
            catch {
                check = await locationPermission.check();
                return check === true;
            }
        }
        else {
            return check === true;
        }
    }
};
//摄像头权限相关
export const cameraPermission = {
    //判断是否有摄像头权限
    check: async () => {
        //判断浏览器是否支持MediaDevices
        if (!('mediaDevices' in navigator)) {
            return false;
        }
        else {
            //尝试获取摄像头信息
            try {
                return await defaultW3PermissionQueryCheck("camera");
            }
            catch {
                return false;
            }
        }
    },
    //请求摄像头权限
    request: async () => {
        let check = await cameraPermission.check();
        if (check === null) {
            try {
                await navigator.mediaDevices.getUserMedia({ video: true });
                return true;
            }
            catch {
                check = await cameraPermission.check();
                return check === true;
            }
        }
        else {
            return check === true;
        }
    }
};
//麦克风权限相关
export const microphonePermission = {
    //判断是否有麦克风权限
    check: async () => {
        //判断浏览器是否支持MediaDevices
        if (!('mediaDevices' in navigator)) {
            return false;
        }
        else {
            //尝试获取麦克风信息
            try {
                return await defaultW3PermissionQueryCheck("microphone");
            }
            catch {
                return false;
            }
        }
    },
    //请求麦克风权限
    request: async () => {
        let check = await microphonePermission.check();
        if (check === null) {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                return true;
            }
            catch {
                check = await microphonePermission.check();
                return check === true;
            }
        }
        else {
            return check === true;
        }
    }
};
async function defaultW3PermissionQueryCheck(permissionName) {
    const info = await navigator.permissions.query({ name: permissionName });
    if (info.state === 'granted') {
        return true;
    }
    else if (info.state === 'prompt') {
        return null;
    }
    else {
        return false;
    }
}
