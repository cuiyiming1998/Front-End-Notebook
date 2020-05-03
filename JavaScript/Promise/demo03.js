let test1 = 1;
let test2 = 2;

function test(){
    return new Promise(function(resolve,reject){
        resolve();
    })
}
test()
.then(()=>{
    test1 = 3;
})
.then(()=>{
    console.log(test1)
})