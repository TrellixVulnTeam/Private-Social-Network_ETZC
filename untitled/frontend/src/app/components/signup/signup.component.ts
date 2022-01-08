import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { Validation } from 'src/app/helpers/password-validator';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;
  notFocused = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  signup(): void {
    const { username, email, password } = this.registrationForm.value;

    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.registrationForm.value, null, 2));

    this.authService.signup(this.registrationForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }
}
