let str = '[1,2,3,4]'
// 以前的做法
let arr1 = eval(str);
console.log(arr1);

let arr2 = Array.of(1,2,3,4);

console.log(arr2);

// Array.of()方法将参数转化为数组