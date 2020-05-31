let arr = [1,2,3,4,5,6];

let index = arr.find((item,index,arr)=>{
    if(item>5){
        return index;
    }
})

console.log(index);