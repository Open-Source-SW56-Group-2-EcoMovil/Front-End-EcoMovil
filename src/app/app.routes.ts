import { Routes } from '@angular/router';
import {VehiclesComponent} from "./public/pages/vehicles/vehicles.component";
import {VehiclePostComponent} from "./public/pages/vehicle-post/vehicle-post.component";
import {RegisterAcquirerComponent} from "./public/pages/register-acquirer/register-acquirer.component";

export const routes: Routes = [
  {path:'myVehicles', component: VehiclesComponent},
  {path: 'postVehicle', component: VehiclePostComponent},
  {path: 'registerAcquirer', component: RegisterAcquirerComponent},
];
