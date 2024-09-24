import { Component, inject, OnInit } from '@angular/core';
import { Vehicle } from '../../../movilizing/model/vehicle.entity';
import { VehicleService } from '../../../movilizing/services/vehicle.service';
import { LogoApiService } from '../../../shared/services/logo-api.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgForOf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filter-acquirer',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './filter-acquirer.component.html',
  styleUrls: ['./filter-acquirer.component.css']
})
export class FilterAcquirerComponent implements OnInit {

  public vehicleData: Vehicle[] = [];
  private vehicleService: VehicleService = inject(VehicleService);
  private Logo = inject(LogoApiService);

  selectedType: string = 'All types';
  selectedPrice: string = 'Lowest to Highest';

  types: string[] = ['All types', 'Scooter', 'Electric bicycle', 'Skateboard', 'Bicycle'];

  getLogoUrl(url: string) {
    return this.Logo.getUrlToLogo(url);
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  private getAllVehicles() {
    this.vehicleService.getAll().subscribe((response: Vehicle[]) => {
      this.vehicleData = response;
    });
  }

  // Función para filtrar por tipo de vehículo
  onTypeChange(type: string) {
    this.selectedType = type;
    // Aquí puedes agregar lógica para filtrar la lista de vehículos por tipo
  }

  // Función para ordenar por precio
  onPriceChange(price: string) {
    this.selectedPrice = price;
    // Aquí puedes agregar lógica para ordenar la lista de vehículos por precio
  }
}
