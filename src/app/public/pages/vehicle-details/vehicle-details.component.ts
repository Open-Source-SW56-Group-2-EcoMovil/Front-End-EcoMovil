import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Vehicle} from "../../../movilizing/model/vehicle.entity";
import { VehicleService } from '../../../movilizing/services/vehicle.service';
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatCardImage
  ],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent implements OnInit{
  protected vehicleData: Vehicle | null = null;
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);

  getLogoUrl(url: string | undefined) {
    return this.Logo.getUrlToLogo(url);
  }

  ngOnInit(): void {
    //cambiar luego xd cuanod juan termine el filter
    this.getVehiclebyId(1);
  }

  private getVehiclebyId(id: number) {
    this.vehicleService.getbyId(id).subscribe((response: Vehicle) => {
      console.log(response);
      this.vehicleData = response;
    });
  }
  redirectToWhatsApp() {
    const whatsappUrl = 'https://wa.me/51934893731?text=Hello%20I%20am%20interested%20in%20your%20vehicle';
    window.open(whatsappUrl, '_blank');
  }

}