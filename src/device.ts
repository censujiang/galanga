import { clipboardPermission } from './permission'
import { shakeObject } from './object'

export const clipboard = {
  read: async (onlyString = true) => {
    if (await clipboardPermission.request() == true) {
      if (onlyString) {
        const text: string = await navigator.clipboard.readText();
        return text;
      } else {
        const result = await navigator.clipboard.read();
        return result;
      }

    } else {
      return null;
    }
  },
  write: async (value: any) => {
    if (await clipboardPermission.request() == true) {
      try {
        if(typeof value === 'string'){
          await navigator.clipboard.writeText(value);
        }else{
          await navigator.clipboard.write(value);
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    } else {
      return false;
    }
  }
}

interface DeviceInfo {
  os: string;
  browser: string;
  device: string;
  platform: string;
}

export function checkDeviceType(types: string[] | string = ['os', 'browser', 'device', 'platform']): DeviceInfo | string | object {
  const ua = navigator.userAgent;

  function getOS(): string {
    if (/Windows/i.test(ua)) {
      return 'windows';
    } else if (/Macintosh/i.test(ua)) {
      return 'mac';
    } else if (/Linux/i.test(ua)) {
      return 'linux';
    } else if (/HarmonyOS/i.test(ua)) {
      return 'harmonyos';
    } else if (/Android/i.test(ua)) {
      return 'android';
    } else if (/iPhone/i.test(ua) || /iPod/i.test(ua) || /iPad/i.test(ua)) {
      return 'ios';
    }

    return 'other';
  }

  function getBrowser(): string {

    if (/MicroMessenger/i.test(ua)) {
      return 'wechat';
    } else if (/QQ/i.test(ua)) {
      return 'qq';
    } else if (/Alipay/i.test(ua)) {
      return 'alipay';
    } else if (/Weibo/i.test(ua)) {
      return 'weibo';
    } else if (/DingTalk/i.test(ua)) {
      return 'dingtalk';
    } else if (/Taobao/i.test(ua)) {
      return 'taobao';
    } else if (/Tmall/i.test(ua)) {
      return 'tmall';
    } else if (/Edge/i.test(ua)) {
      return 'edge';
    } else if (/Opera/i.test(ua)) {
      return 'opera';
    } else if (/360SE/i.test(ua)) {
      return '360';
    } else if (/UCBrowser/i.test(ua)) {
      return 'uc';
    } else if (/Baidu/i.test(ua)) {
      return 'baidu';
    } else if (/Chrome/i.test(ua)) {
      return 'chrome';
    } else if (/Safari/i.test(ua)) {
      return 'safari';
    } else if (/Firefox/i.test(ua)) {
      return 'firefox';
    } else if (/MSIE/i.test(ua)) {
      return 'ie';
    }

    return 'other';
  }

  function getDevice(): string {
    const deviceRegex = /(iPad).*OS\s([\d_]+)|(iPod)(.*OS\s([\d_]+))?|(iPhone\sOS)\s([\d_]+)|(Android);?[\s\/]+([\d.]+)?|(Windows\sPhone)\sOS\s([\d.]+)|(Windows\sNT)\s([\d.]+)|(Macintosh);.*Mac\sOS\sX\s([\d_]+)|(Linux)\s?([\d.]+)?/;
    const matches = ua.match(deviceRegex);
    if (matches) {
      if (matches[1] || matches[3] || matches[5]) {
        return 'tablet';
      } else if (matches[7] || matches[9] || matches[11]) {
        return 'mobile';
      } else if (matches[13] || matches[15] || matches[17]) {
        return 'pc';
      }
    }

    return 'other';
  }

  const platform = 'web'

  let isString = false;
  let originTypes:String;
  if (typeof types === 'string') {
    isString = true;
    types = [types];
    originTypes = types[0];
  }

  //定义一个result对象，用于存储检测结果
  //通过检查types数组，来确定需要获取的信息，不需要的信息不获取也不存储空置（直接跳过）
  const result: DeviceInfo = {
    os: types.includes('os') ? getOS() : '',
    browser: types.includes('browser') ? getBrowser() : '',
    device: types.includes('device') ? getDevice() : '',
    platform: types.includes('platform') ? platform : '',
  }

  if (typeof types === 'string') {
    return result[originTypes as keyof DeviceInfo];
  } else {
    return shakeObject(result, types);
  }
}