import { LightningElement } from 'lwc';

export default class CreditCard extends LightningElement {
    handleCCValidate(evt) {
        console.log(evt.detail);
    }
}