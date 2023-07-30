// Way 1 : To write a function

function add(a: number, b: number) {
    return a + b;
}

function add2(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(2, 3));
console.log(add2(3, 1));

//  Way 2 : To write a function

const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(3, 4));

// Way 3

const mult = function (num1: number, num2: number) {
    return num1 * num2;
}
console.log(mult(2, 5));

// Optional Parameters

function add3(num1: number, num2: number, num3?: number): number {
    return num1 + num2;
}

console.log(add3(3, 9)); //12
console.log(add3(3, 9, 10)); //12

function add4(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add4(3, 9, 5)); //12

// Required Parameters

const sub2 = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;
console.log(sub2(2, 4));
console.log(sub2(3, 6, 12));

// Rest Parameters

function add5(num1:number, num2:number, ...num3:number[]){
    return num1+num2+num3.reduce((a,b)=>a+b,0);
}

let numbers = [1,2,3,4,5];
console.log(add5(2,4,...numbers));
console.log(add5(1,3,...[2,3,5]));
console.log(add5(2,3,1,32,1));

// Generic Functions

function getItems<Type>(items : Type[]):Type[]{
    return new Array<Type>().concat(items);
}

let concatR      = getItems([1,2,3,4]);
let concatResult = getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(["a","b","c"]);
console.log(concatString);
