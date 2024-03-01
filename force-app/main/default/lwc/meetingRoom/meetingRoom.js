import { LightningElement, api } from "lwc";

//Exemplos de propriedades publicas
export default class MeetingRoom extends LightningElement {
  //@API você pode criar uma propriedade pública reativa
  //as informações desse cara vem do component pai meetingRooms
  //@api meetingRoomInfo; //{roomName: 'A-01', roomCapacity: '12'}

  @api showRoomInfo = false;
}
