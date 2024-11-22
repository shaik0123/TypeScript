import {HasFormater} from '../interface/Hasformater.js';

export class payments implements HasFormater{
    constructor(
        readonly recipient:string,
        private details:string,
        public amount:number
    ){ 
    }

    format(){
        return `${this.recipient} owed ₹${this.amount} for ${this.details}` 
    }
}