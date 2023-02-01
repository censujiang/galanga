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
};