import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';


@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.scss']
})
export class UserPasswordComponent implements OnInit {

  passwordForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.passwordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]]
    });
  }

  changePassword(event: Event){
    event.preventDefault();
    if (this.passwordForm.valid){
      const { currentPassword, newPassword, confirmNewPassword } = this.passwordForm.value;
      if (newPassword === confirmNewPassword){
        this.authService.updatePassword(currentPassword, newPassword)
          .subscribe((result: any) => {
           const { success, data } = result;
           if (success){
             this.successMessage = 'La contraseña ha sido actualizada';
             setTimeout(() => this.successMessage = '', 3000);
           }
          });
      }else{
        this.errorMessage = 'Las contraseñas no coinciden';
        setTimeout(() => this.errorMessage = '', 3000);
      }
    }
  }

}
