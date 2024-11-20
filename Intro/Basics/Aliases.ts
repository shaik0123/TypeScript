type stringOrNum = string | number;
type objWithName = {name: string,uid: stringOrNum};

const logDetails = (uid: stringOrNum,item: string) =>{
    console.log(`${item} has a uid of ${uid}`); 
}

const greet = (user:objWithName) =>{
    console.log(`${user.name} says hello`);
}

const greetAgain = (user:objWithName) =>{
    console.log(`${user.name} says hello`);
}
var result = logDetails(101,"jhon");
console.log(result);
var person = {name:"shaik",uid:201}
console.log(greet(person));
var person1 = {name:"ismail",uid:301}
console.log(greet(person1));

