// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/auth/services/auth/auth.service';
import { LocalStorageService } from 'src/app/module/auth/services/localStorage/local-storage.service';
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../../services/auth-firebase/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logging: boolean = false;
  isHidePassword: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private authFirebaseService: AuthFirebaseService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.onLogin();
    } else {
      alert('Form is invalid');
    }
  }

  onLogin() {
    this.logging = true;
    let email = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    this.authFirebaseService.login(email, password).subscribe(
      (response: any) => {
        // this.localStorageService.saveKeyValue('token', response); // save token in local storage
        this.router.navigateByUrl('/home');
        this.logging = false;
      },
      (error: any) => {
        console.error('Login error', error);
        this.logging = false;
      }
    );
  }

  goToLoginPage() {
    this.router.navigateByUrl('/auth/login');
  }

  goToRegistrationPage() {
    this.router.navigateByUrl('/auth/registration');
  }
}
