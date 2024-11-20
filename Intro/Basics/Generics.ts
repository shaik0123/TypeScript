 
 const addUID = <T extends {name:string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
 }

 let docOne = addUID({name:"shaik",age:20});
 console.log(docOne.age);


 interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T;
 }
 
 const docTwo: Resource<string> = {
    uid: 1,
    resourceName:'person',
    data: 'shaik'
 }

 const docThree: Resource<string[]> = {
    uid:2,
    resourceName:'shoppingList',
    data: ['bread','milk','roll']
 }

 console.log(docTwo, docThree);
 