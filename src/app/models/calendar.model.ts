import {CircuitModel} from "./circuit.model";

export class CalendarModel {

  id: number;
  orderInCalendar: string;
  circuitId: number;
  dateOfRace: Date;

  circuit: CircuitModel;
}
