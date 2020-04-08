function wait(ms){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(ms);
        },ms);
    });
}

console.log("开始计时");
wait(1000)
.then((delayMs)=>{
    console.log(`已经过了${delayMs}毫秒`);
    return wait(delayMs);
})
.then((delayMs)=>{
    console.log(`已经过了${delayMs}毫秒`);
    throw new Error("我异常了");
})
.catch((err)=>{
    console.log("捕获异常 ", err);
    // 传入后续参数
    // return wait(1000);
    return Promise.resolve(1500);
})
.then((delayMs)=>{
    console.log(`已经过了${delayMs}毫秒`);
})

// async await
// await后面接一个会 return new Promise 的函数并执行
// await只能放在async function 中
async function run(){
    let ms = await wait(1000);
    console.log(`等待${ms}毫秒`);
}
run();