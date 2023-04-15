//根据UA检查设备类型
//启动此函数后，默认的参数输入类型是['os','browser','device']，也可以自定义
//其中os是操作系统，browser是浏览器，device是设备类型
//返回值是一个对象，根据输入的类型，返回对应的值，比如说输入['os','browser']，返回值就是{os:'ios',browser:'safari'}
//os的值有：ios,android,harmonyos,wp,mac,windows,linux,other
//browser的值有：safari,chrome,firefox,ie,opera,uc,qq,360,other
//device的值有：mobile,tablet,pc,watch,other
export function checkDeviceType(types: string[] = ['os', 'browser', 'device'],return_string:boolean = false): any {
  let ua = navigator.userAgent;
  //检查操作系统类型
  let os = (function () {
    let s = ua.match(/(HarmonyOS)\/([\d.]+)/);
    if (s) {
      return { os: 'harmonyos', version: s[2] };
    }
    ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    if (s) {
      return { os: 'android', version: s[2] };
    }
    s = ua.match(/(iPad).*OS\s([\d_]+)/);
    if (s) {
      return { os: 'ios', version: s[2].replace(/_/g, '.') };
    }
    s = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    if (s) {
      return { os: 'ios', version: s[3].replace(/_/g, '.') };
    }
    s = ua.match(/(iPhone\sOS)\s([\d_]+)/);
    if (s) {
      return { os: 'ios', version: s[2].replace(/_/g, '.') };
    }
    s = ua.match(/(Windows\sPhone)\sOS\s([\d.]+)/);
    if (s) {
      return { os: 'wp', version: s[2] };
    }
    s = ua.match(/(Macintosh);.*Mac\sOS\sX\s([\d_]+)/);
    if (s) {
      return { os: 'mac', version: s[2].replace(/_/g, '.') };
    }
    s = ua.match(/(Windows\sNT)\s([\d.]+)/);
    if (s) {
      return { os: 'windows', version: s[2] };
    }
    s = ua.match(/(Linux)\s?([\d.]+)?/);
    if (s) {
      return { os: 'linux', version: s[2] };
    }
    return { os: 'other', version: '0' };
  })();
  //检查浏览器类型
  let browser = (function () {
    let s = ua.match(/(MicroMessenger)\/([\d.]+)/);
    if (s) {
      return { browser: 'wechat', version: s[2] };
    }
    s = ua.match(/(QQ)\/([\d.]+)/);
    if (s) {
      return { browser: 'qq', version: s[2] };
    }
    s = ua.match(/(UCBrowser)\/([\d.]+)/);
    if (s) {
      return { browser: 'uc', version: s[2] };
    }
    s = ua.match(/(360SE)/);
    if (s) {
      return { browser: '360', version: '0' };
    }
    s = ua.match(/(360EE)/);
    if (s) {
      return { browser: '360', version: '0' };
    }
    s = ua.match(/(Maxthon)/);
    if (s) {
      return { browser: 'maxthon', version: '0' };
    }
    s = ua.match(/(TaoBrowser)/);
    if (s) {
      return { browser: 'taobao', version: '0' };
    }
    s = ua.match(/(TheWorld)/);
    if (s) {
      return { browser: 'theworld', version: '0' };
    }
    s = ua.match(/(SE)\s([\d.]+)/);
    if (s) {
      return { browser: 'sogou', version: s[2] };
    }
    s = ua.match(/(LBBROWSER)/);
    if (s) {
      return { browser: 'liebao', version: '0' };
    }
    s = ua.match(/(Chrome)\/([\d.]+)/);
    if (s) {
      return { browser: 'chrome', version: s[2] };
    }
    s = ua.match(/(Firefox)\/([\d.]+)/);
    if (s) {
      return { browser: 'firefox', version: s[2] };
    }
    s = ua.match(/(Opera).+Version\/([\d.]+)/);
    if (s) {
      return { browser: 'opera', version: s[2] };
    }
    s = ua.match(/(Safari)\/([\d.]+)/);
    if (s) {
      return { browser: 'safari', version: s[2] };
    }
    s = ua.match(/(Trident)\/([\d.]+)/);
    if (s) {
      return { browser: 'ie', version: s[2] };
    }
    return { browser: 'other', version: '0' };
  })();
  //检查设备类型
  let device = (function () {
    let s = ua.match(/(iPad).*OS\s([\d_]+)/);
    if (s) {
      return { device: 'tablet' };
    }
    s = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    if (s) {
      return { device: 'mobile' };
    }
    s = ua.match(/(iPhone\sOS)\s([\d_]+)/);
    if (s) {
      return { device: 'mobile' };
    }
    s = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    if (s) {
      return { device: 'mobile' };
    }
    s = ua.match(/(Windows\sPhone)\sOS\s([\d.]+)/);
    if (s) {
      return { device: 'mobile' };
    }
    s = ua.match(/(Windows\sNT)\s([\d.]+)/);
    if (s) {
      return { device: 'pc' };
    }
    s = ua.match(/(Macintosh);.*Mac\sOS\sX\s([\d_]+)/);
    if (s) {
      return { device: 'pc' };
    }
    s = ua.match(/(Linux)\s?([\d.]+)?/);
    if (s) {
      return { device: 'pc' };
    }
    return { device: 'other' };
  })();
  //根据输入的参数types（默认为['os', 'browser', 'device']，也可能会被用户按需调整），按需返回对应的值（比如说{os: 'ios', browser: 'wechat', device: 'mobile'}，或者用户只需要os和device，那么就返回{os: 'ios', device: 'mobile'}，有一种特殊情况，如果用户只需要os或者其他的一个值，恰好return_string = true，那么就直接返回对应的值，比如说只需要os，那么就返回'ios'）
  let result: any = {};
  result = types.reduce((result: any, type: string) => {
    if (type === 'os') {
      result.os = os.os;
    } else if (type === 'browser') {
      result.browser = browser.browser;
    } else if (type === 'device') {
      result.device = device.device;
    }
    return result;
  }, {});
  if (return_string) {
    if (types.length === 1) {
      return result[types[0]];
    }
  }
  return result;
}