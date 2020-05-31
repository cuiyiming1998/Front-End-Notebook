/*
    解构赋值
*/

// 数组解构
let [a,[b,c],d] = [0,[1,2],3];
console.log('数组解构：'+ a,b,c,d);
// 默认值
let [foo="true"] = [null];
console.log(foo);

// 对象解构
let {name,age} = {
    name: 'young',
    age: 19
}
console.log('对象解构：'+ name,age)

// 字符串解构
const [e,f,g,h,i] = 'javascript'
console.log(e,i)
