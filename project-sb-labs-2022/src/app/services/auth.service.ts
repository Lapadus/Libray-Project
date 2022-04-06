import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../interfaces/user'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { NONE_TYPE } from '@angular/compiler';

import { concatMap, from, Observable, of, switchMap } from 'rxjs';
import * as auth from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any ; // Save logged in user data
  db = getDatabase();
  name: string;
  constructor(public afs: AngularFirestore, private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe(user => {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
        
    });
  }

  // all firebase getdata functions

  //get UID from auth table
  get currentUserId(): string {
    return (this.userData !== null) ? this.userData.uid : ''
  }
  //get email from auth tabel
  get currentUserName(): string {
    return this.userData['email']
  }
  //get current user
  get currentUser(): any {
    return (this.userData !== null) ? this.userData : null;
  }
  //return if the user is logged with email not annonymous
  get isUserEmailLoggedIn(): boolean {
    if (this.userData !== null) {
      return true
    } else {
      return false
    }
  }

  //register with authentification firebase
  registerWithEmail(email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.userData = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  //log in with firebase auth
  loginWithEmail(email: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.userData = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  //sing out with firebase auth
  signout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/home']);
    localStorage.removeItem('user');
  }
    
}
