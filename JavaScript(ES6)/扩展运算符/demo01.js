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