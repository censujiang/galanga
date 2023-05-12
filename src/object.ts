import { checkNotNull } from './string';


//将importObject中的值更新到object中，如果importObject中的值为空，则不更新
export function updateObjectFromImport(importObject: object, object: object) {
  for (let key in object) {
    if (importObject.hasOwnProperty(key)) {
      if (typeof object[key] === 'object' && typeof importObject[key] === 'object') {
        updateObjectFromImport(importObject[key], object[key]);
      } else {
        //再根据是否为空来判断是否要更新
        if (checkNotNull(importObject[key])) {
          object[key] = importObject[key];
        }
      }
    }
  }
  return object;
}