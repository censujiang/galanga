import { checkNotNull } from './string';
export const url = {
    getQuery(name) {
        const result = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getHash(name) {
        const result = window.location.hash.match(new RegExp('[#&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getPath(isFullPath = false) {
        let path;
        if (isFullPath) {
            //获取完整路径，包括参数、hash、路径
            path = window.location.href;
            const origin = window.location.origin;
            path = path.replace(origin, '');
        }
        else {
            //获取路径，不包括参数、hash
            path = window.location.pathname;
        }
        return path;
    },
    setPath(path) {
        try {
            //动态设置路由，不能使用location.href，否则会刷新页面
            window.history.pushState({}, '', path);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    },
    setHash(hash) {
        try {
            window.location.hash = hash;
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    },
    setQuery(name, value) {
        try {
            //首先获取当前url参数
            const params = new URLSearchParams(window.location.search);
            //设置新的参数
            params.set(name, value);
            //重新设置url参数
            window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    },
    removeQuery(name) {
        try {
            //首先获取当前url参数
            const params = new URLSearchParams(window.location.search);
            //删除指定参数
            params.delete(name);
            //重新设置url参数
            window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    },
    removeHash() {
        try {
            window.location.hash = '';
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
//获取上一页的url
export function getPreURL() {
    const back = window.history.state.back;
    if (checkNotNull(back)) {
        return back;
    }
    else {
        return document.referrer;
    }
}
