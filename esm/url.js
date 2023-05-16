"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
exports.url = {
    getQuery: function (name) {
        var result = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getHash: function (name) {
        var result = window.location.hash.match(new RegExp('[#&]' + name + '=([^&]+)', 'i'));
        if (result == null || result.length < 1) {
            return '';
        }
        return result[1];
    },
    getPath: function () {
        return window.location.pathname;
    },
};
