var greet = function () {
    console.log('hello');
};
// greet = 'hello';
var greet1;
greet1 = function () {
    console.log('hello function');
};
var add = function (a, b, c /*c:string|number =10*/) {
    console.log(a + b);
    console.log(c); //undefined
};
add(5, 10);
var add1 = function (a, b) {
    return a + b;
};
var result = add1(10, 20);
console.log(result);
