import { LightningElement } from 'lwc';
import { getCreditCardType } from 'c/creditCardHelpers';

export default class CreditCard extends LightningElement {
    ccHolderName;
    ccNumber;
    ccType;
    ccExpDate;
    ccExpDateWithin30days;
    ccCCV;

    handleCardNumber(evt) {
        this.ccNumber = evt.detail;
        this.ccType = getCreditCardType(this.ccNumber);
    }
    
    handleCardHolderName(evt) {
        this.ccHolderName = evt.detail;
    }
    
    handleCardExpDate(evt) {
        this.ccExpDate = evt.detail;
        const today = new Date();
        const expDate = new Date('20'+(this.ccExpDate).substring(2,4),(this.ccExpDate).substring(0,2)-1,1,today.getHours(),today.getMinutes(),today.getSeconds());
        const dateDifference = Math.floor((expDate - today) / (1000 * 3600 * 24));

        if(dateDifference < 30){
            console.log('This credit card expires in less than 30 days. Please use a credit card with expiration date greater than 30 days.');
        }
    }

    handleCardCCV(evt) {
        this.ccCCV = evt.detail;
        console.log(this.ccCCV);
    }
} 