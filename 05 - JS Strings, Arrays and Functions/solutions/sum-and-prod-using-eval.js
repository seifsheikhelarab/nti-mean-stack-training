function sumAll(arr){
    let x = arr.join('+');
    return eval(x);
}

function prodAll(arr){
    let x = arr.join('*');
    return eval(x);
}

console.log("sum of array",sumAll([3,1,4,5,2]));
console.log("product of array",prodAll([3,1,4,5,2]));