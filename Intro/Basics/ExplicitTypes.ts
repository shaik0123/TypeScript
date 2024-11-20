// explicit types
let char1 : string;
let age1 : number;
let isLoggedIn : boolean;

// age1 = '10';
age1 = 10;

// isLoggedIn = 25;
isLoggedIn = false;

//arrays
let arr : string[];
arr = ['shaik','ismail'];
console.log(arr);


let arr1 : string[] = [];
arr1.push("newElement");
console.log(arr1);


//union types
let mixed1 : (string|number|boolean)[] = [];

mixed1.push('hello');
mixed1.push(10);
mixed1.push(true);
console.log(mixed1);


//objects
let obj1 : object;
obj1 = {name:'shaik',age: 30};
console.log(obj1);


let obj2 :{
    name :string,
    age : number,
    color : string
}

obj2 ={
    name :"string",
    age : 10,
    color : "string",
    // skills : "skills"
}
console.log(obj2);
