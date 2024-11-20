import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import {Vehicle} from "../../model/vehicle.entity";
import { VehicleService } from '../../services/vehicle.service';
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {MatCardImage} from "@angular/material/card";
import {RatingModule} from "primeng/rating";
import {HeaderComponent} from "../../../public/components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";
import {HeaderAcquirerComponent} from "../../../public/components/header-acquirer/header-acquirer.component";

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatCardImage,
    RatingModule,
    UpperCasePipe,
    TranslateModule,
    HeaderComponent,
    HeaderAcquirerComponent
  ],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent implements OnInit{
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
    this.getVehiclebyId(1);
    this.randomRating()
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
