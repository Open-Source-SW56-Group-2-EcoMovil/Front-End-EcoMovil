import { Component, inject, OnInit, ViewChild} from '@angular/core';
import {ConfirmationComponent} from "../../../ProfileAcquirers/components/confirmation/confirmation.component";
import {ProfileComponent} from "../../../ProfileAcquirers/components/profile/profile.component";
import {HeaderAcquirerComponent} from "../../components/header-acquirer/header-acquirer.component";
import {TranslateModule} from "@ngx-translate/core";
import {UserService} from "../../../auth/services/user.service";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-edit-profile-acquirer',
  standalone: true,
  imports: [
    ConfirmationComponent,
    ProfileComponent,
    TranslateModule,
    HeaderAcquirerComponent,
    HeaderComponent
  ],
  templateUrl: './edit-profile-acquirer.component.html',
  styleUrl: './edit-profile-acquirer.component.css'
})
export class EditProfileAcquirerComponent implements OnInit {
  user: any;
  @ViewChild('confirmation') confirmation!: ConfirmationComponent;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getbyId(1).subscribe(data => {
      this.user = data;
    });
  }

  userChange(updatedUser: any) {
    this.userService.update(this.user.id, updatedUser).subscribe((data: any) => {
      console.log('Usuario actualizado:', data);

      this.confirmation.message = 'Datos actualizados correctamente!';
      this.confirmation.show();
    });
  }
}
