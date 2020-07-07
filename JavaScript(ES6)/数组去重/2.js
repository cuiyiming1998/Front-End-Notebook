// 使用for if循环判断

function unique(arr) {
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

let arr1 = [1,1,2,2,3,3];
let arr2 = unique(arr1);

console.log(arr2);