var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    console.log("".concat(user.name, " says hello"));
};
var greetAgain = function (user) {
    console.log("".concat(user.name, " says hello"));
};
console.log(logDetails(101, "jhon"));
var person = { name: "shaik", uid: 201 };
console.log(greet(person));
var person1 = { name: "ismail", uid: 301 };
console.log(greet(person1));
