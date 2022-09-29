import { LightningElement, api } from 'lwc';

export default class CreditCardImage extends LightningElement {
    @api ccNumber;
    @api ccType;
    @api ccHolderName;
    @api ccExpDate;
    @api ccCcv;
}