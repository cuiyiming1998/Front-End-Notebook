let json = {
    '0': 'this is 0',
    '1': 'this is 1',
    '2': 'this is 2',
    length: 3
}

let arr = Array.from(json);
console.log(arr);

// Array.from()
// 使JSON转化为数组，格式错误会返回undefined