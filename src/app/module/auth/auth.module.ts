import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/module/auth/components/login/login.component';
import { AuthRoutingModule } from 'src/app/module/auth/auth-routing.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
  SchemaMetadata,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from 'src/app/module/auth/components/registration/registration.component';
import { AuthFirebaseService } from './services/auth-firebase/auth-firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthFirebaseService],
})
export class AuthModule {}
