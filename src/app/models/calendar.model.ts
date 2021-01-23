import {CircuitModel} from "./circuit.model";

export class CalendarModel {

  id: number;
  orderInCalendar: string;
  gpId: number;
  dateOfRace: Date;

  circuit: CircuitModel
}
