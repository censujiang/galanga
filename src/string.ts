// 检查输入的值是否为空
export function checkNull(val: any) {
	if (val == null || val == undefined || val == '') {
		return true;
	} else if (Array.isArray(val) && val.length === 0) {
		return true;
	} else {
		return false;
	}
}