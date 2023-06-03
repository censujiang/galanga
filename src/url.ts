import { checkNotNull } from './string';

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
		try {
			//动态设置路由，不能使用location.href，否则会刷新页面
			window.history.pushState({}, '', path);
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}

	},
	setHash(hash: string) {
		try {
			window.location.hash = hash;
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	},
	setQuery(name: string, value: string) {
		try {
			//首先获取当前url参数
			const params = new URLSearchParams(window.location.search);
			//设置新的参数
			params.set(name, value);
			//重新设置url参数
			window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	},
};

//获取上一页的url
export function getPreURL() {
	const back = window.history.state.back
	if (checkNotNull(back)) {
		return back
	} else {
		return document.referrer
	}
}