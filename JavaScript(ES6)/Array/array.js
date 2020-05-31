// forEach

let arr = ['vue','react','angular'];

arr.forEach((item,index)=>{
    console.log(`${index}:${item}`)
})

// filter
let vue = arr.filter((item,index,arr)=>{
    return item == 'vue'
})
console.log(vue)

// map
let map = arr.map((item,index)=>{
    console.log(`map：${item},${index}`)
})
