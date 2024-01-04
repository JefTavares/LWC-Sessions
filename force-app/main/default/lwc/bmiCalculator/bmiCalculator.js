import { LightningElement, track } from "lwc";

export default class BmiCalculator extends LightningElement {
  cardTitle = "BMI Calculator";

  @track bmiData = {
    weight: 0,
    height: 0,
    result: 0
  };

  weight;
  height;

  //@track bmi; //Tipos primitivos não são mais necessarios o track já são reativos por natureza
  bmi;
  onWeightChange(event) {
    this.weight = parseFloat(event.target.value);
    this.bmiData.weight = parseFloat(event.target.value);
  }

  onHeightChange(event) {
    this.height = parseFloat(event.target.value);
    this.bmiData.height = parseFloat(event.target.value);
  }

  calculateBMI() {
    try {
      this.bmi = this.weight / (this.height * this.height);
      this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
    } catch (error) {
      //this.bmi = undefined;
      this.bmiData.result = undefined;
    }
  }

  changePrivatePropertyValue() {
    this.cardTitle = "Changed value";
    console.log("value: ", this.cardTitle);
  }

  get bmiValue() {
    if (this.bmi === undefined) {
      return "";
    }
    return `Your BMI is: ${this.bmi}`;
  }
}
