export interface User{

    name : string;
    age ?: number;
    id : number;
    email : string;

}

// let user : User = {name:"John", age:30, id:1, email:""};

// let user : User = {name:"John", id:1, email:""};
// user.name;
// user.email; // if we want to access these 2 attributes

// let {name,email} : User = {name:"John", id: 2, email:""};
let {name:userName,email:userEmail} : User = {name:"John", id: 2, email:""}; // variables can be used with alias names


interface Employees extends User{
    salary : number;
}

let employee : Employees = { name:"Johna", id:1, email:"a", salary:10000};

export interface Login{
    login() : User;
}

let users : User[] = [
    {name:"Pat", id:1, email:""},
    {name:"Josh", id:2, email:""},
    {name:"Lyon", id:3, email:""},
]

let [user1, user2] : User[] = [
    {name:"Pat", id:1, email:""},
    {name:"Josh", id:2, email:""},
    {name:"Lyon", id:3, email:""},
    {name:"Broad", id:4, email:""},
    {name:"Anderson", id:5, email:""},
]


let [user_a, user_b, ...restUsers] : User[] = [
    {name:"Pat", id:1, email:""},
    {name:"Josh", id:2, email:""},
    {name:"Lyon", id:3, email:""},
    {name:"Broad", id:4, email:""},
    {name:"Anderson", id:5, email:""},
]

console.log(user1);
console.log(user2);
console.log(userName);
console.log(user_a);
console.log("x");
console.log(restUsers);

let result = restUsers.filter(user=> user.id>3);
console.log(result);
