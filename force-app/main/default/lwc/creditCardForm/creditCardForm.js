import { LightningElement, api } from "lwc";
import { getMonths, getYears } from "c/creditCardHelpers";

export default class CreditCardForm extends LightningElement {
  monthOptions = getMonths();
  yearOptions = getYears();

  @api ccExpMonth;
  @api ccExpYear;

  cardNumberInputHandler(event) {
    const evt = new CustomEvent("processcardnumber", {
      detail: event.detail.value
    });
    this.dispatchEvent(evt);
  }

  cardHolderNameInputHandler(event) {
    const evt = new CustomEvent("processcardholdername", {
      detail: event.detail.value
    });
    this.dispatchEvent(evt);
  }

  cardCCVInputHandler(event) {
    const evt = new CustomEvent("processcardccv", {
      detail: event.detail.value
    });
    this.dispatchEvent(evt);
  }

  cardExpMonthHandler(event) {
    const evt = new CustomEvent("processcardexpmonth", {
      detail: event.detail.value
    });
    this.dispatchEvent(evt);
  }

  cardExpYearHandler(event) {
    const evt = new CustomEvent("processcardexpyear", {
      detail: event.detail.value
    });
    this.dispatchEvent(evt);
  }

  formSubmitHandler() {
    const evt = new CustomEvent("formsubmission");
    this.dispatchEvent(evt);
  }
}
