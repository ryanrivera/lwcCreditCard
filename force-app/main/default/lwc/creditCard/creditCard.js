import { LightningElement } from 'lwc';
import { getCreditCardType } from 'c/creditCardHelpers';

export default class CreditCard extends LightningElement {
    ccHolderName;
    ccNumber;
    ccType;
    ccExpDateWithin30days;
    ccCCV;
    ccExpMonth = '0';
    ccExpYear = `${new Date().getFullYear()}`;

    handleCardNumber(evt) {
        this.ccNumber = evt.detail;
        this.ccType = getCreditCardType(this.ccNumber);
    }
    
    handleCardHolderName(evt) {
        this.ccHolderName = evt.detail;
    }

    handleCardCCV(evt) {
        this.ccCCV = evt.detail;
        console.log(this.ccCCV);
    }

    handleCardExpMonth(evt) {
        this.ccExpMonth = evt.detail;
        console.log(this.ccExpMonth);
    }

    handleCardExpYear(evt) {
        this.ccExpYear = evt.detail;
        console.log(this.ccExpYear);
    }

    handleFormSubmission(evt) {
        console.log('handleFormSubmission:', evt);

        setTimeout(() => {
            const today = new Date();
            const expDate = new Date(this.ccExpYear,this.ccExpMonth,1,today.getHours(),today.getMinutes(),today.getSeconds());
            const dateDifference = Math.floor((expDate - today) / (1000 * 3600 * 24));

            if(dateDifference < 30){
                console.log('This credit card expires in less than 30 days. Please use a credit card with expiration date greater than 30 days.');
            } else {
                console.log('Credit card is good!');
            }
        },2000);
        
    }
} 