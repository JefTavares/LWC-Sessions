import { LightningElement, api } from "lwc";

//import NAME_FIELD from "@salesforce/schema/Account.Name";
// import PHN_FIELD from "@salesforce/schema/Account.Phone";
// import WEBSITE_FIELD from "@salesforce/schema/Account.Website";

export default class AccountRecordForm extends LightningElement {
  //@track recordId; utilizado na penultima forma

  //Só a nome do objeto e o campo recordId já são suficiente para pegar o object dentro da páginas de registro
  //Esses @api recordId e objectApiName faz o link automaticamente quando o LWC esta em uma Página de Registro
  @api recordId;
  @api objectApiName;

  /* O  fieldsArray faz parte do outro metodo que vc pode fazer por campo a campo
     Seja passando o nome ou importando o campo (Precisa trocar a referencia no html)
   */
  //fieldsArray = ["Name", "Phone", "Website"];
  //fieldsArray = [NAME_FIELD, PHN_FIELD, WEBSITE_FIELD];

  handleSuccess(event) {
    //this.recordId = event.detail.id;
    console.log(event);
  }
}
