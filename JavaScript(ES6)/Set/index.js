// set类似于数组
let arr = new Set();
arr.add(1);

let arr1 = [1,1,2,2,3,3,4,4,5,6];

// 数组去重
let arr2 = new Set(arr1);

let arr3 = [...arr2];
console.log(arr3)

// map
let m = new Map();
m.set('name','cym').set('age',11)
for (let [key,value] of m){
    console.log(key,value)
}