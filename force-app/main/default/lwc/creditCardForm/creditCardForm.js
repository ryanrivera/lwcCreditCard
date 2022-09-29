import { LightningElement, api } from 'lwc';
//import { creditCardType } from 'c/creditCardType';

export default class CreditCardForm extends LightningElement {
    @api
    handleCCInput(event){
        console.log(event.target.value);
        const evt = new CustomEvent('validatecc', {
            detail: event.target.value
        });
        this.dispatchEvent(evt);
        // cc1 = creditCardType(event.target.value);
        // console.log(cc1);
        // this.dispatchEvent(new CustomEvent('validateCC1')), {
        //     cc1: this.event.value
        // };
    }
}