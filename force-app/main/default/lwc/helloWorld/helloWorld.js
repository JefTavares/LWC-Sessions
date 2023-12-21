import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  @track dynamicGreeting = "World";

  //Use event handler to create data binding from template to JS Controller
  greetingChangeHandler(event) {
    this.dynamicGreeting = event.target.value;
  }
}
