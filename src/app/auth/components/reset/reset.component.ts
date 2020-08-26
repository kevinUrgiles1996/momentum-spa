import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  invalid = false;
  invalidMessage: string;
  successMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  buildForm() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetPassword(event: Event){
    event.preventDefault();
    if (this.resetForm.valid){
      const { email } = this.resetForm.value;
      this.authService.sendResetPasswordEmail(email)
        .subscribe(
          (result: any) => {
            const { success } = result;
            if (success){
              this.successMessage = 'Se le ha enviado un correo con instrucciones para recuperar su contraseña';
            }
            setTimeout(() => {
              this.successMessage = '';
              this.router.navigate(['']);
            }, 3000);
          },
          (err: any) => {
            this.invalid = true;
            if (err.status === 404){
              this.invalidMessage = 'El correo ingresado no ha sido registrado';
            }
            setTimeout(() => this.invalid = false, 3000);
          }
        )
    }
  }

}
