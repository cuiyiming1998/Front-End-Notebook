/*
    rest运算符
*/

function fun1(first,...arg){
    // 使用for...of
    for(let val of arg){
        console.log(val);
    }
}

fun1(1,2,3,4,5); // 2,3,4,5