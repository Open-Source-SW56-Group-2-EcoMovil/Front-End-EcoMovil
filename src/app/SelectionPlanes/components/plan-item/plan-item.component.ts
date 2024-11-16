import {Component, inject, Input } from '@angular/core';
import {Plan} from "../../model/plan";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatFabAnchor} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";
import {PaymentService} from "../../../shared/services/payment.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-plan-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatIcon,
    MatFabAnchor,
    RouterLink,
    MatCardFooter,
    TranslateModule
  ],
  templateUrl: './plan-item.component.html',
  styleUrl: './plan-item.component.css'
})
export class PlanItemComponent {
  @Input() plan!: Plan;
  private paymentService = inject(PaymentService);
  private router: Router = inject(Router);

  constructor() {
    this.plan = new Plan({});
  }

  onClick(){
    this.paymentService.modifyCost(this.plan.cost);
     this.router.navigate(['/payment']);
     console.log("botno presionado")
  }

  protected readonly Number = Number;
}
