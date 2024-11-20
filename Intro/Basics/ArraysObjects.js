var names = ['one', 'two', 'three'];
names.push('four');
// names.push(10);
// names[0]=true;
console.log(names);
var numbers = [10, 20, 30];
numbers.push(40);
// numbers.push('fifty');
// numbers[2]='20';
console.log(numbers);
var mixed = ['one', 2, 'three', true];
mixed.push('five');
mixed.push(6);
mixed[3] = 'four';
console.log(mixed);
//---------------------------------
var obj = {
    name: "shaik",
    age: 23,
    email: 'shaik@gmail.com'
};
obj.name = 'ismail';
obj.age = 30;
// obj.email = 20;
// obj.mobile = 9897969594; 
obj = {
    name: 'new',
    age: 40,
    email: 'new@gmail.com',
    // mobile:9897969594
};
console.log(obj);
