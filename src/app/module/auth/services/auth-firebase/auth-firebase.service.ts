import { Injectable } from '@angular/core';
// import { AngularFireAuth, Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  createUserWithEmailAndPassword,
  // Auth,
  // signInWithEmailAndPassword,
  // createUserWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFirebaseService {
  constructor(
    // private afAuth: Auth ,
    private afAuth: AngularFireAuth // private router: Router
  ) {}

  // loginWithGoogle() {
  // return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());  }
  // }
  //login method
  login(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  // logout() {
  //   return this.afAuth.signOut();
  // }

  // getUser() {
  //   // return this.afAuth.authState;
  // }

  register(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  // loginWithEmail(email: string, password: string) {
  //   // return this.afAuth.signInWithEmailAndPassword(email, password);
  // }
}
