import { LightningElement } from "lwc";

//Exemplos de propriedades publicas (Esse é o component pai)
export default class MeetingRooms extends LightningElement {
  meetingRoomsInfo = [
    { roomName: "A-01", roomCapacity: "12" },
    { roomName: "A-02", roomCapacity: "16" },
    { roomName: "A-03", roomCapacity: "11" },
    { roomName: "B-01", roomCapacity: "12" },
    { roomName: "B-02", roomCapacity: "15" },
    { roomName: "B-03", roomCapacity: "9" },
    { roomName: "C-01", roomCapacity: "20" }
  ];
}
