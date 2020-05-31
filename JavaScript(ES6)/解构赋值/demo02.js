// 对象函数解构

let json = {
    a: 'vue',
    b: 'react'
}

function fun({a,b}) {
    console.log(a);
    console.log(b);
}

fun(json);

// 数组解构

let arr = [1,2,3,4];
function fun2(a,b,c){
    console.log(a+b+c);
}

fun2(...arr);