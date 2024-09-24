import {Component, Input} from '@angular/core';
import {Vehicle} from "../../model/vehicle";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatFabAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-vehicle-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatFabAnchor,
    RouterLink,
    MatCardImage,
    MatCardActions,
    NgIf
  ],
  templateUrl: './vehicle-item.component.html',
  styleUrl: './vehicle-item.component.css'
})
export class VehicleItemComponent {
  @Input() vehicle!: Vehicle;
  protected readonly Number = Number;

  constructor(){
    this.vehicle = new Vehicle({});
  }

  onClick(): void {

  }
}
