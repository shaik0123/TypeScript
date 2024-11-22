import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { payments } from './classes/Payments.js';
// let docOne: HasFormater;
// let docTwo: HasFormater;
// docOne = new Invoice('yoshi','web work',200);
// docTwo = new payments('yoshi','data work',300);
// let docs: HasFormater[]= [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('shaik','work on the shaik website',250);
// const invTwo = new Invoice('ismail','work on the ismail website',350);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv =>{
//     console.log(inv.client, inv.amount, inv.format());   
// });
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
