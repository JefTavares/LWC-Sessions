import { LightningElement, track } from "lwc";

export default class ConditionalRenderingExample extends LightningElement {
  @track displayDiv = false;

  @track cityList = ["Sâo Paulo", "São Caetano", "Itu", "Rio", "Taubate"];

  showDivHandler(event) {
    this.displayDiv = event.target.checked;
  }
}
