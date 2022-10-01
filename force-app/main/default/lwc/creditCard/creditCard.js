import { LightningElement } from "lwc";
import { getCreditCardType } from "c/creditCardHelpers";

export default class CreditCard extends LightningElement {
  ccHolderName;
  ccNumber;
  ccType;
  ccExpDateWithin30days;
  ccCCV;
  ccExpMonth;
  ccExpYear;
  _ccCardClass = "slds-box card";
  ccCardClass = this._ccCardClass;
  processing = false;
  ccExpMonthDisplay;
  ccExpYearDisplay;
  ccNumberDisplay;
  cardAddedError = false;
  cardAddedSuccess = false;

  handleCardNumber(evt) {
    this.ccNumber = evt.detail;
    this.ccType = getCreditCardType(this.ccNumber);
    if (this.ccType !== undefined)
      this.ccCardClass = `${this._ccCardClass} ${this.ccType.toLowerCase()}`;
    else this.ccCardClass = this._ccCardClass;

    if (this.ccType === "AMEX")
      this.ccNumberDisplay = `${this.ccNumber.substring(
        0,
        4
      )} ${this.ccNumber.substring(4, 10)} ${this.ccNumber.substring(10, 15)}`;
    else
      this.ccNumberDisplay = `${this.ccNumber.substring(
        0,
        4
      )} ${this.ccNumber.substring(4, 8)} ${this.ccNumber.substring(
        8,
        12
      )} ${this.ccNumber.substring(12, 16)}`;
  }

  handleCardHolderName(evt) {
    this.ccHolderName = evt.detail;
  }

  handleCardCCV(evt) {
    this.ccCCV = evt.detail;
  }

  handleCardExpMonth(evt) {
    this.ccExpMonth = evt.detail;
    this.ccExpMonthDisplay = Number(Number(this.ccExpMonth) + 1).toLocaleString(
      undefined,
      { minimumIntegerDigits: 2 }
    );
  }

  handleCardExpYear(evt) {
    this.ccExpYear = evt.detail;
    this.ccExpYearDisplay = this.ccExpYear.substring(2);
  }

  handleFormSubmission() {
    this.processing = true;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      const today = new Date();
      const expDate = new Date(
        this.ccExpYear,
        this.ccExpMonth,
        1,
        today.getHours(),
        today.getMinutes(),
        today.getSeconds()
      );
      const dateDifference = Math.floor((expDate - today) / (1000 * 3600 * 24));

      this.processing = false;

      if (dateDifference < 30) {
        this.cardAddedError = true;
        this.cardAddedSuccess = false;
      } else {
        this.cardAddedError = false;
        this.cardAddedSuccess = true;
      }
    }, 500);
  }
}
