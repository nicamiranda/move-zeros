"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroes = void 0;
let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
let len = arr.length;
let j = 0;
const moveZeroes = (arr, len) => {
    for (let i = 0; i < len; i++) {
        if (arr[i] != 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
};
exports.moveZeroes = moveZeroes;
console.log((0, exports.moveZeroes)(arr, len));
