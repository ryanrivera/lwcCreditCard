import { LightningElement, api } from 'lwc';

export default class CreditCardImage extends LightningElement {
    @api ccNumber;
    @api ccType;
    @api ccHolderName;
    @api ccExpMonth;
    @api ccExpYear;
    @api ccCcv;
    @api ccCardClass;
    @api ccExpMonthDisplay;
    @api ccExpYearDisplay;
}