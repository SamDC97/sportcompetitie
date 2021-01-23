import {CarModel} from "./car.model";
import {DriverModel} from "./driver.model";

export class TeamModel {

  id: number;
  name: string;
  carId: number;
  driverId1: number;
  driverId2: number;

  car: CarModel;
  driver1: DriverModel;
  driver2: DriverModel;
}
