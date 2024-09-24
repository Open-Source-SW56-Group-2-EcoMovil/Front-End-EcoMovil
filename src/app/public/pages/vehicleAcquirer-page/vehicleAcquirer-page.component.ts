import {Component, inject} from '@angular/core';
import {VehiclesApiService} from "../../../VehiclesAcquirers/services/vehicles-api.service";
import {VehicleListComponent} from "../../../VehiclesAcquirers/components/vehicle-list/vehicle-list.component";
import {Vehicle} from "../../../VehiclesAcquirers/model/vehicle";

@Component({
  selector: 'app-vehicle-page',
  standalone: true,
  imports: [
    VehicleListComponent
  ],
  templateUrl: './vehicleAcquirer-page.component.html',
  styleUrl: './vehicleAcquirer-page.component.css'
})
export class VehiclePageComponent {
  vehicles: Array<Vehicle> = [];
  private vehicleApi: VehiclesApiService = inject(VehiclesApiService);

  constructor() {
    this.getVehicle();
  }

  getVehicle(){
    this.vehicleApi.getSources().subscribe((data: any) => {
      this.vehicles = data;
    });
  }
}
