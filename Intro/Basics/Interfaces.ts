interface interfaceI{
    name: string;
    age:number;
    speak(a: string):string;
    spend(a: number):number;
}

const me : interfaceI = {
    name:'shaik',
    age: 20,
    speak(text:string):string{
        console.log(text);
        return text;
    },
    spend(amount:number):number{
        console.log("i spent",amount);
        return amount;
    }
};


const greetPerson = (person : interfaceI) =>{
    console.log(`${person.name} speaks ${person.speak("urdu")} he spents ₹${person.spend(555)} on data.`);
};
greetPerson(me);