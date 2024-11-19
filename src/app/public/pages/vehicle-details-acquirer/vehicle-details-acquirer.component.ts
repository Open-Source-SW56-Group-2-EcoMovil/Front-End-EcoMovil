import {Component, inject, OnInit} from '@angular/core';
import {MatCardImage} from "@angular/material/card";
import {RatingModule} from "primeng/rating";
import {NgIf, UpperCasePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Vehicle} from "../../../movilizing/model/vehicle.entity";
import {VehicleService} from "../../../movilizing/services/vehicle.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {HeaderAcquirerComponent} from "../../components/header-acquirer/header-acquirer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-vehicle-details-acquirer',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatCardImage,
    RatingModule,
    UpperCasePipe,
    HeaderAcquirerComponent,
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './vehicle-details-acquirer.component.html',
  styleUrl: './vehicle-details-acquirer.component.css'
})
export class VehicleDetailsAcquirerComponent implements OnInit{
  protected vehicleData: Vehicle | null = null;
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);
  value?: number;

  randomRating() {
    this.value = Math.floor(Math.random() * 6);
  }

  getLogoUrl(url: string | undefined) {
    return this.Logo.getUrlToLogo(url);
  }

  ngOnInit(): void {
    //cambiar luego xd cuanod juan termine el filter
    this.getVehiclebyId(5);
    this.randomRating()
  }

  private getVehiclebyId(id: number) {
    this.vehicleService.getbyId(id).subscribe((response: Vehicle) => {
      console.log(response);
      console.log('aqui esta el vehiculo');
      this.vehicleData = response;
    });
  }
  redirectToWhatsApp() {
    const whatsappUrl = 'https://wa.me/51934893731?text=Hello%20I%20am%20interested%20in%20your%20vehicle';
    window.open(whatsappUrl, '_blank');
  }
}
