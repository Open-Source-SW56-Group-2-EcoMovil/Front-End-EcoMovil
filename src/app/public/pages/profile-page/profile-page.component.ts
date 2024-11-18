import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Profile} from "../../../ProfileAcquirers/model/profile";
import {ProfileApiService} from "../../../ProfileAcquirers/services/profile-api.service";
import {ProfileComponent} from "../../../ProfileAcquirers/components/profile/profile.component";
import {ConfirmationComponent} from "../../../ProfileAcquirers/components/confirmation/confirmation.component";
import {UserService} from "../../../../../../../../learning-center-master/learning-center-master/src/app/iam/model/user.service";
import {User} from "../../../../../../../../learning-center-master/learning-center-master/src/app/iam/model/model/user.entity";
import {HeaderComponent} from "../../components/header/header.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ProfileComponent,
    ConfirmationComponent,
    TranslateModule,
    HeaderComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  user: any;
  @ViewChild('confirmation') confirmation!: ConfirmationComponent;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(1).subscribe(data => {
      this.user = data;
    });
  }

  userChange(updatedUser: any) {
    this.userService.updateUser(this.user.id, updatedUser).subscribe((data: any) => {
      console.log('Usuario actualizado:', data);

      this.confirmation.message = 'Datos actualizados correctamente!';
      this.confirmation.show();
    });
  }
}
