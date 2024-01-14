import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/_services/firebase.service';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


@Injectable({
  providedIn: 'root',
})
export class LoginComponent implements OnInit {
  isSignedIn = false;

  FIREBASE_AUTH_PROVIDER = new InjectionToken('FIREBASE_AUTH_PROVIDER', {
    providedIn: 'root',
    factory: () => new firebase.auth.GoogleAuthProvider(),
  });

  constructor(private router: Router, private firebaseService: FirebaseService,) { }


  //part of the constructor at some point: @Inject(FIREBASE_AUTH_PROVIDER) private readonly fireAuthProvider: firebase.auth.AuthProvider,
  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)

    if (email.toLowerCase() === "steccoordinator@ggc.edu") {
      this.router.navigate(['admin']);
    }
    else {
      if (this.firebaseService.isLoggedIn)
        this.isSignedIn = true
      this.router.navigate(['student']);
      // location.reload()
    }


    //This version should be a little more secure in first checking that you're logging in with the 
    // right credentials before checking admin email.
    // if(this.firebaseService.isLoggedIn)
    // {
    //   alert(email + ", " + password);
    //   if(email == "@ggc.edu")
    //   {
    //     this.router.navigate(['admin'])
    //   }
    //   else{
    //     this.isSignedIn = true
    //   }
    // }
    // location.reload()
  }

  registerClick() {
    this.router.navigate(['register']);
  }

  backClick() {
    this.router.navigate(['landing']);
  }
}
