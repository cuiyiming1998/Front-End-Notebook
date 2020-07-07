function unique(arr) {
    return Array.from(new Set(arr));
}
let arr1 = [1,1,1,2,3,3,4,5,5];

let arr2 = unique(arr1);
console.log(arr2);

arr2 = [...new Set(arr1)];
console.log(arr2);