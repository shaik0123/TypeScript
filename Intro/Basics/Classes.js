var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u20B9").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('shaik', 'work on the shaik website', 250);
var invTwo = new Invoice('ismail', 'work on the ismail website', 350);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
