import {Component, Input} from '@angular/core';
import {Vehicle} from "../../model/vehicle";
import {VehicleItemComponent} from "../vehicle-item/vehicle-item.component";

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    VehicleItemComponent
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  @Input() vehicles!: Array<Vehicle>;

  constructor() {
    this.vehicles =  new Array<Vehicle>();
  }

}
