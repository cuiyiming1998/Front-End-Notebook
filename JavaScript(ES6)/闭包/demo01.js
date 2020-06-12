function funA(){
    var a = 10;
    return function(){
        console.log(a);
    }
}

var b = funA();
b();