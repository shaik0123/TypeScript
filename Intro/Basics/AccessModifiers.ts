class Invoice{
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){ 
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

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format());   
})


