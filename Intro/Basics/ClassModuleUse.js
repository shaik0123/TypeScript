"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassModule_js_1 = require("../Basics/ClassModule.js");
var invOne = new ClassModule_js_1.Invoice('shaik', 'work on the shaik website', 250);
var invTwo = new ClassModule_js_1.Invoice('ismail', 'work on the ismail website', 350);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
