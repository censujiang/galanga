import { checkNull } from "./string";

export const url = {
	getQuery(name: string) {
		const result = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
		if (result == null || result.length < 1) {
			return '';
		}
		return result[1];
	},
	getHash(name: string) {
		const result = window.location.hash.match(new RegExp('[#&]' + name + '=([^&]+)', 'i'));
		if (result == null || result.length < 1) {
			return '';
		}
		return result[1];
	},
	getPath() {
		return window.location.pathname;
	},
	setPath(path: string) {
		//动态设置路由，不能使用location.href，否则会刷新页面
		window.history.pushState({}, '', path);
	},
	setHash(hash: string) {
		window.location.hash = hash;
	},
	setQuery(name: string, value: string) {
		//首先获取当前path
		let path = this.getPath();
		//判断是否已经有查询参数
		const query = this.getQuery(name);
		if (checkNull(query)) {
			//path是否有查询参数
			if (path.indexOf('?') > -1) {
				path += `&${name}=${value}`;
			} else {
				path += `?${name}=${value}`;
			}
		} else {
			//找到原有的查询参数的全部内容
			const reg = new RegExp(`(${name}=)([^&]*)`, 'i');
			//替换原有的查询参数
			path = path.replace(reg, `$1${value}`);
		}
		//设置新的path
		this.setPath(path);
	}
};