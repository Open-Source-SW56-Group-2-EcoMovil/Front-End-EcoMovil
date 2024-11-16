import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-register-acquirer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    LanguageSwitcherComponent
  ],
  templateUrl: './register-acquirer.component.html',
  styleUrl: './register-acquirer.component.css'
})
export class RegisterAcquirerComponent {

}
