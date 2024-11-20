class Invoice{
    client:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
      this.client = c;
      this.details = d;
      this.amount = a;  
    }

    format(){
        return `${this.client} owes ₹${this.amount} for ${this.details}` 
    }
}

const invOne = new Invoice('shaik','work on the shaik website',250);
const invTwo = new Invoice('ismail','work on the ismail website',350);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);


