//获取具体的url查询参数的值
export function getQueryString(name: string) {
  var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return "";
  }
  return result[1];
}