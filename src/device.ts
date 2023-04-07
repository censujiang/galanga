//根据UA检查设备是手机、平板、手表还是桌面
//启动此函数后，将会检查当前浏览器的UA。
//安卓手机返回android，苹果手机返回ios，平板返回pad，手表返回watch，桌面返回desktop
export function checkDeviceType() {
  const ua = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
    if (/Android/i.test(ua)) {
      return 'android';
    } else if (/iPhone|iPad|iPod/i.test(ua)) {
      return 'ios';
    } else if (/iPad/i.test(ua)) {
      return 'pad';
    } else if (/Watch/i.test(ua)) {
      return 'watch';
    } else {
      return 'desktop';
    }
  } else {
    return 'desktop';
  }
}