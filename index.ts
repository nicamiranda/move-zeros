let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
let len = arr.length;
let j: number = 0;

export const moveZeroes = (arr:any[], len:number) => {
    for (let i = 0; i < len; i++) {
        if (arr[i] != 0) {
            let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
             j++;
        }
    }
    return arr;
}

console.log(moveZeroes(arr, len));