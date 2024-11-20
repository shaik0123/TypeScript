var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "shaik", age: 20 });
console.log(docOne.age);
var docTwo = {
    uid: 1,
    resourceName: 'person',
    data: 'shaik'
};
var docThree = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'roll']
};
console.log(docTwo, docThree);
