import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/user/user.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  editUserForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  buildForm(){
    this.editUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      about: ['', [Validators.required]],
    });
  }

  updateUser(event: Event){
    event.preventDefault();
    if (this.editUserForm.valid){
      const { name, gender, email, about } = this.editUserForm.value;
      const userUpdates = { name, gender, email, about };
      this.userService.updateUserDetails(userUpdates)
        .subscribe((result: { success: boolean, data: any }) => {
          const { success } = result;
          if (success){
            this.successMessage = 'Tus datos han sido actualizados correctamente';
            setTimeout(() => this.successMessage = '', 3000);
          }else{
            this.errorMessage = 'Ha existido un problema. Vuelve a intentarlo';
            setTimeout(() => this.errorMessage = '', 3000);
          }
        });
    }
  }

  getUserInfo(){

    this.authService.getUserInfo()
      .subscribe((result: any) => {
        const { name, email, gender, about } = result.data;
        this.editUserForm.get('name').setValue(name);
        this.editUserForm.get('email').setValue(email);
        this.editUserForm.get('gender').setValue(gender);
        this.editUserForm.get('about').setValue(about);
      });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

}
