import { LightningElement } from 'lwc';
import { creditCardType } from 'c/creditCardType';

export default class CreditCard extends LightningElement {
    ccHolderName;
    ccNumber;
    ccType;
    ccExpDate;
    ccCCV;

    handleCardNumber(evt) {
        this.ccNumber = evt.detail;
        this.ccType = creditCardType(this.ccNumber);
    }
    
    handleCardHolderName(evt) {
        this.ccHolderName = evt.detail;
    }
    
    handleCardExpDate(evt) {
        this.ccExpDate = evt.detail;
        console.log(this.ccExpDate);
    }

    handleCardCCV(evt) {
        this.ccCCV = evt.detail;
        console.log(this.ccCCV);
    }
} 