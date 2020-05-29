
function wait(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },2000);
    });
}

var co = function(callback){
    return function(){
        return new Promise(function(resolve,reject){
            callback();
            resolve();
        })
    }
}

var fun1 = co(function(){
    console.log("call fun1")
})

var fun2 = co(function(){
    console.log("call fun2")
})

async function test(){
    for(let f of [fun1,fun2]){
        await f();
    }
}
test();

// 时序组合

// [wait,fun1,fun2].reduce((p,f)=>p.then(f),Promise.resolve());

Promise.resolve()
.then(wait)
.then(fun2)
.then(wait)
.then(co(function(){
    console.log("test")
}));