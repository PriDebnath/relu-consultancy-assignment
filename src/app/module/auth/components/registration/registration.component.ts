import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/module/auth/services/auth/auth.service';
import { LocalStorageService } from 'src/app/module/auth/services/localStorage/local-storage.service';
import { AuthFirebaseService } from '../../services/auth-firebase/auth-firebase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registering: boolean = false;
  isHidePassword: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authFirebaseService: AuthFirebaseService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.register();
    } else {
      // Display validation errors
      alert('Form is invalid');
    }
  }

  register() {
    this.registering = true;
    let email = this.registrationForm.get('email')?.value;
    let password = this.registrationForm.get('password')?.value;

    this.authFirebaseService.register(email, password).subscribe(
      (response) => {
        console.log({ response });
        this.router.navigateByUrl('/auth/login');
        this.registering = false;
      },
      (error) => {
        this.registering = false;
        console.log({ error });
        console.error('RegistrationForm error', error);
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
