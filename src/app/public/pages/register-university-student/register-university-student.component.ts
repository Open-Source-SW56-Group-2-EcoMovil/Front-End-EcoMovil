import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";
@Component({
  selector: 'app-register-university-student',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    LanguageSwitcherComponent
  ],
  templateUrl: './register-university-student.component.html',
  styleUrl: './register-university-student.component.css'
})
export class RegisterUniversityStudentComponent {

}
