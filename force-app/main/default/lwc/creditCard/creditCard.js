import { LightningElement } from 'lwc';
import { getCreditCardType } from 'c/creditCardHelpers';

export default class CreditCard extends LightningElement {
    ccHolderName;
    ccNumber;
    ccType;
    ccExpDateWithin30days;
    ccCCV;
    ccExpMonth;
    ccExpYear;
    _ccCardClass = 'slds-box card';
    ccCardClass = this._ccCardClass;
    processing = false;
    ccExpMonthDisplay;
    ccExpYearDisplay;
    expError = false;

    handleCardNumber(evt) {
        this.ccNumber = evt.detail;
        this.ccType = getCreditCardType(this.ccNumber);
        if(this.ccType !== undefined)
            this.ccCardClass = `${this._ccCardClass} ${(this.ccType).toLowerCase()}`;
        else
            this.ccCardClass = this._ccCardClass;
    }
    
    handleCardHolderName(evt) {
        this.ccHolderName = evt.detail;
    }

    handleCardCCV(evt) {
        this.ccCCV = evt.detail;
    }

    handleCardExpMonth(evt) {
        this.ccExpMonth = evt.detail;
        this.ccExpMonthDisplay = Number(Number(this.ccExpMonth)+1).toLocaleString(undefined, {minimumIntegerDigits: 2});
    }

    handleCardExpYear(evt) {
        this.ccExpYear = evt.detail;
        this.ccExpYearDisplay = (this.ccExpYear).substring(2);
    }

    handleFormSubmission(evt) {
        this.processing = true;
        setTimeout(() => {
            const today = new Date();
            const expDate = new Date(this.ccExpYear,this.ccExpMonth,1,today.getHours(),today.getMinutes(),today.getSeconds());
            const dateDifference = Math.floor((expDate - today) / (1000 * 3600 * 24));

            this.processing = false;

            if(dateDifference < 30){
                this.expError = true;
                console.log('expError: ',this.expError);
                console.log('This credit card expires in less than 30 days. Please use a credit card with expiration date greater than 30 days.');
            } else {
                console.log('Credit card is good!');
            }
        },2000);
    }
} 