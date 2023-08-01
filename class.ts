// class Employee {
//     id!: number;
//     name!: string;
//     address!:string;
    
// }

// let john = new Employee();
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';

// console.log(john);

class Employee{

    // private id : number;
    #id:number;
    name : string;
    address : string;

    constructor(id:number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    get empId() : number{
        return this.#id;
    }

    set empId(id : number){
        this.#id = id;
    }

    getNamewithAddress():string{
        // return this.name + " "+ this.address;
        return `${this.name} stays at this ${this.address}`;
    }

    static getEmployeeCount() : number{
        return 50;
    }

}

class Manager extends Employee{

    constructor(id:number, name:string, address: string){
        super(id,name,address);
    }

    getNamewithAddress(): string {
        return `${this.name} is manager at ${this.address}`;
    }

}

let john = new Employee(1,"John", "Highway 75");
console.log(john);
let address = john.getNamewithAddress();
console.log(address);
let manager = new Manager(2,"Mike","Bates Motel");
console.log(manager.getNamewithAddress());
Employee.getEmployeeCount();
john.empId=100;
console.log(john.empId);
