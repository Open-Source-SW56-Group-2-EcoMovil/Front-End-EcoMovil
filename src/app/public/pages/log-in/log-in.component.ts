import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    LanguageSwitcherComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
