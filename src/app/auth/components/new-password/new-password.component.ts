import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  newPasswordForm: FormGroup;
  invalid = false;
  invalidMessage: string;
  resetToken: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { resetToken: token } = params;
      this.resetToken = token;
    });
  }

  buildForm() {
    this.newPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [ Validators.required ]],
    });
  }

  requestPassword(event: Event){
    event.preventDefault();
    if (this.newPasswordForm.valid){
      const { password, confirmPassword } = this.newPasswordForm.value;
      const passwordMatch = password === confirmPassword;
      if (passwordMatch){
        this.authService.resetPassword(password, this.resetToken)
          .subscribe(
            (result: any) => {
              const { success } = result;
              if (success){
                alert('Su contraseña ha sido actualizada');
              }
            },
            (err: any) => {
              if (err.status === 400){
                this.invalid = true;
                this.invalidMessage = 'Url Inválida';
                this.router.navigate(['/']);
              }
            },
            (() => {
              this.router.navigate(['/']);
            })
          );
      } else {
        this.invalid = true;
        this.invalidMessage = 'Las contraseñas no coinciden';
        setTimeout(() => this.invalid = false, 3000);
      }
    }
  }

}
