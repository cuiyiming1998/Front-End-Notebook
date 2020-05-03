// 简单的async await


function playDice(){
    return new Promise(function(resolve,reject){
        console.log("骰子正在旋转...")
        let diceNum = parseInt(Math.random()*6 + 1);
        setTimeout(()=>{
            resolve(diceNum);
        },2000)
    })
};

async function play(){
    let num = await playDice();
    console.log(`骰子的数字是${num}`);
}
play();