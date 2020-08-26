import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  authenticated = false;
  invalid = false;
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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginUser(event: Event) {
    event.preventDefault();

    if (this.loginForm.valid){
      const { email, password } = this.loginForm.value;
      this.authService.loginUser(email, password)
        .subscribe(
          (result: any) => {
            const { success } = result;
            if (success){
              this.authenticated = true;
            }
          },
          (err: any) => {
            this.invalid = true;
            if (err.error === 'Invalid credentials'){
              this.invalidMessage = 'Correo o contraseña inválidos';
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
        );
    }
  }

  ngOnInit(): void {
  }

}
