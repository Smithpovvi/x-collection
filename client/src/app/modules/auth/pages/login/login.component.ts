import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { take } from 'rxjs/operators';
import { ILoginForm } from '../../types/forms.type';
import { Router } from '@angular/router';
import facebook from '../../../../../assets/icons/facebook.svg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<ILoginForm>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {
    this.loginForm = formBuilder.group({
      loginOrEmail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get loginOrEmail() {
    return this.loginForm.controls.loginOrEmail;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  getFormErrorMessage(field: FormControl<string>): string {
    if (field?.hasError('required') && field.touched) {
      return 'Required field';
    }
  }

  submitLoginForm(): void {
    this.authenticationService
      .login(this.loginForm.value.loginOrEmail, this.loginForm.value.password)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
        this.loginForm.reset();
      });
  }

  loginWithGoogle(): void {
    this.authenticationService
      .loginWithGoogle()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  loginWithFacebook(): void {
    this.authenticationService
      .loginWithFacebook()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
