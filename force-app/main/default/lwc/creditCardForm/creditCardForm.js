import { LightningElement, api } from 'lwc';

export default class CreditCardForm extends LightningElement {
    @api

    cardNumberInputHandler(event){
        const evt = new CustomEvent('processcardnumber', {
            detail: event.target.value
        });
        this.dispatchEvent(evt);
    }

    cardHolderNameInputHandler(event){
        const evt = new CustomEvent('processcardholdername', {
            detail: event.target.value
        });
        this.dispatchEvent(evt);
    }
    
    cardExpDateInputHandler(event){
        const evt = new CustomEvent('processcardexpdate', {
            detail: event.target.value
        });
        this.dispatchEvent(evt);   
    }
    
    cardCCVInputHandler(event){
        const evt = new CustomEvent('processcardccv', {
            detail: event.target.value
        });
        this.dispatchEvent(evt);
        
    }
}