// is()对两个对象进行比较
let obj1 = {
    name: 'young',
}
let obj2 = {
    name: 'young',
}
console.log(Object.is(obj1.name,obj2.name))