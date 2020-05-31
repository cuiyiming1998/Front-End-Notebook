/*
    对象扩展运算符
*/

// 不知道参数的数量时，使用... 在函数内部使用数组的方式获得参数
function fun1(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
}
fun1(1,2,3)

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // 1,2,3,4
// 这种原因是因为在arr2 = arr1时，并没有开辟新的内存空间，只是将arr1的地址映射给了arr2
// 可以使用扩展运算符

let arr3 = [1,2,3,4];
let arr4 = [...arr3,5];
console.log(arr4); // 1,2,3,4,5
console.log(arr3); // 1,2,3,4
