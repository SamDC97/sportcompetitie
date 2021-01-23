export class TeamModel {

  id: number;
  name: string;
  carId: number;
  driverId1: number;
  driverId2: number;

  car: Car;
  driver1: Driver;
  driver2: Driver;
}
