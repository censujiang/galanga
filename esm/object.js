"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObjectFromImport = void 0;
var string_1 = require("./string");
//将importObject中的值更新到object中，如果importObject中的值为空，则不更新
function updateObjectFromImport(importObject, object) {
    for (var key in object) {
        if (importObject.hasOwnProperty(key)) {
            if (typeof object[key] === 'object' && typeof importObject[key] === 'object') {
                updateObjectFromImport(importObject[key], object[key]);
            }
            else {
                //再根据是否为空来判断是否要更新
                if ((0, string_1.checkNotNull)(importObject[key])) {
                    object[key] = importObject[key];
                }
            }
        }
    }
    return object;
}
exports.updateObjectFromImport = updateObjectFromImport;
