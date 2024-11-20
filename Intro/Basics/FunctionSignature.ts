let greet :(a:string,b:string) => void;

greet = (name:string ,greeting:string) =>{
    console.log(`${name} says ${greeting}`);
}
console.log(greet("deo","congrats"));


let calc: (a:number,b:number,c?:string) => number;

calc = (n1:number,n2:number,action?:string) =>{
    if(action === "add"){
        return n1+n2;
    }else{
        return n1-n2;
    }
}
console.log(calc(1,2));
