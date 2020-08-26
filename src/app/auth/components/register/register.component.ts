import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth/auth.service';
import { TokenService } from '@core/services/token/token.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  authenticated = false;
  invalid =  false;
  invalidMessage: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  signupUser(event: Event) {
    event.preventDefault();
    if (this.signupForm.valid){
      const { name, email, password, gender } = this.signupForm.value;
      this.authService.signUpUser(name, email, password, gender, 'user')
        .subscribe(
          (result: any) => {
            const { success } = result;
            if (success){
              this.authenticated = true;
            }
          },
          (err: any) => {
            this.invalid = true;
            if (err.error === 'Email inserted already exists'){
              this.invalidMessage = 'El correo ingresado ya existe';
            } else {
              this.invalid = err.error;
            }
            setTimeout(() => this.invalid = false, 3000);
          },
          () => {
            if (this.authenticated){
              this.router.navigate(['/']);
            }
          }
        )
    }
  }

  ngOnInit(): void {
  }

}
