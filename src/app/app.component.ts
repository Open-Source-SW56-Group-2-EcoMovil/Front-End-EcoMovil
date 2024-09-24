import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "./public/components/header/header.component";
import {HeaderAcquirerComponent} from "./public/components/header-acquirer/header-acquirer.component";
import {VehiclesComponent} from "./public/pages/vehicles/vehicles.component";
import {Vehicle} from "./movilizing/model/vehicle.entity";
import {VehiclePageComponent} from "./public/pages/vehicleAcquirer-page/vehicleAcquirer-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenu, MatMenuItem, MatButton, MatMenuTrigger, NgIf, HeaderComponent, HeaderAcquirerComponent, VehiclesComponent, VehiclePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomovil-LandingPage';
  menuOpen = false;


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
