export class Vehicle {
  name: string;
  image: string;
  description: string;
  cost: number;
  type : string;

  constructor(vehicle:{
    name?: string,
    image?: string,
    description?: string,
    cost?: number,
    type?: string}) {
    this.name = vehicle.name || "";
    this.image = vehicle.image || "";
    this.description = vehicle.description || "";
    this.cost = vehicle.cost|| 0;
    this.type = vehicle.type || "";
  }

}
