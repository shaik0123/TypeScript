var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
