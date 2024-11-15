import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {PlanesApiService} from "../../services/planes-api.service";
import {Plan} from "../../model/plan";
import {PlanItemComponent} from "../plan-item/plan-item.component";

@Component({
  selector: 'app-plan-list',
  standalone: true,
  imports: [
    PlanItemComponent
  ],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css'
})
export class PlanListComponent {

  @Input() planes!: Array<Plan>;

  constructor() {
  this.planes = new Array<Plan>();
  }
}
