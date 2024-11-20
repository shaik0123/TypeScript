var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
console.log(greet("deo", "congrats"));
var calc;
calc = function (n1, n2, action) {
    if (action === "add") {
        return n1 + n2;
    }
    else {
        return n1 - n2;
    }
};
console.log(calc(1, 2));
