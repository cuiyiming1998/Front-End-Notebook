// 赋值
let name = 'young';
let age = 15;
let obj = {
    name,
    age
}
console.log(obj)

// key值声明
let key='name';
let obj1={
    [key]:'y'
}
console.log(obj1)

// 自定义对象方法
let obj2 = {
    add: (a,b)=>{
        return a+b;
    }
}