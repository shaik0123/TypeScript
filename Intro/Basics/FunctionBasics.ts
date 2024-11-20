let greet = () =>{
    console.log('hello');
}
// greet = 'hello';

let greet1: Function;
greet1 = () => {
    console.log('hello function');
}

const add = (a:number, b:number, c?:string|number/*c:string|number =10*/ ):void =>{
    console.log(a+b);
    console.log(c);//undefined
}
add(5,10);

const add1 =(a:number,b:number):number => {
    return a+b;
}
let result = add1(10,20);
console.log(result);
