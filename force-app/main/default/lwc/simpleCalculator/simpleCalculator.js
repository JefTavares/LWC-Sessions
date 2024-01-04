import { LightningElement, track } from "lwc";

export default class SimpleCalculator extends LightningElement {
  @track currentResult;
  @track previousResult = [];
  @track showPreviousResult = false;

  firstNumber;
  secondNumber;

  numberChangeHandler(event) {
    const inputBoxName = event.target.name;
    if (inputBoxName === "firstNumber") {
      this.firstNumber = event.target.value;
    } else {
      this.secondNumber = event.target.value;
    }
  }

  addHandler() {
    const firstN = parseInt(this.firstNumber, 10); //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    const secondN = parseInt(this.secondNumber, 10);

    //this.currentResult = "Result of " + firstN + " + " + secondN + " is " + (firstN + secondN);
    this.currentResult = `Result of ${firstN}+${secondN} is ${firstN + secondN}`;
    this.previousResult.push(this.currentResult);
  }

  subHandler() {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);

    this.currentResult = `Result of ${firstN}-${secondN} is ${firstN - secondN}`;
    this.previousResult.push(this.currentResult);
  }

  multiplyHandler() {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);

    this.currentResult = `Result of ${firstN}*${secondN} is ${firstN * secondN}`;
    this.previousResult.push(this.currentResult);
  }

  divisionHandler() {
    const firstN = parseInt(this.firstNumber, 10);
    const secondN = parseInt(this.secondNumber, 10);

    this.currentResult = `Result of ${firstN}/${secondN} is ${firstN / secondN}`;
    this.previousResult.push(this.currentResult);
  }

  showPreviousResultToggle(event) {
    this.showPreviousResult = event.target.checked;
  }
}
