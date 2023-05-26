import { checkNotNull } from './string';
//将importObject中的值更新到object中，如果importObject中的值为空，则不更新
export function updateObjectFromImport(importObject, object) {
    for (let key in object) {
        if (importObject.hasOwnProperty(key)) {
            if (typeof object[key] === 'object' && typeof importObject[key] === 'object') {
                updateObjectFromImport(importObject[key], object[key]);
            }
            else {
                //再根据是否为空来判断是否要更新
                if (checkNotNull(importObject[key])) {
                    object[key] = importObject[key];
                }
            }
        }
    }
    return object;
}
//根据输入的数组，将原有的object中的数组摇树，生成新的object
//例如有一个object为{a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10},数组为['a','b','c','d']，则返回的object为{a:1,b:2,c:3,d:4}
export function shakeObject(object, array) {
    let result = {};
    array.forEach(key => {
        if (object.hasOwnProperty(key)) {
            result[key] = object[key];
        }
    });
    return result;
}
