let fname = 'john';
// fname = 10;

fname= 'Ram';
let newname = fname.toUpperCase();
console.log(newname);

let age = 20;
let age2: number;
age2 = 10;
age = 10.6;

let dob = "50";
let result = parseInt(dob);

// Array

// let isValue: boolean;
// console.log(isValue);  
// let emp : []; -> Type Any
let empList : string[];
empList = ["Zack", "Cavill", "Lex"];

let numList : Array<number>;
numList = [1,2,3,4,5];

let results = numList.filter(num=> num>2);
console.log(results)

// results = numList.find(num => num=2); -> Error
let num = numList.find(num=>num===4);
console.log("Ans : "+num);

let str = empList.find(emp => emp = 'Zach');
console.log("Str:"+str);

let num2 = numList.reduce((acc, num) => acc + num);
console.log("num2 : "+num2);

// Enum

const enum Color {
    Red,
    Green,
    Blue
}

let c : Color.Blue;

// Any 

let department : any;
department = "Ram";
department = 10;

// function add(num1: number, num2: number){
//     return num1+num2;
// }

let d;
d = "Kite";
d = 2;

// Functions

