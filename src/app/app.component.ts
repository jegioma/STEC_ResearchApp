import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FirebaseService } from './_services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';



//This supposedly will help make the test run correctly (along with other modifications that I haven't made yet)
//The this.firebaseConfig I believe won't work.
//https://github.com/angular/angularfire/issues/2985
//there's an injectable that we have to import somewhere.

// @NgModule(
//   {
//     declarations: [],
//     imports: [
//       AngularFireModule.initializeApp(this.firebaseConfig),
//     AngularFirestoreModule.enablePersistence(),
//     AngularFireStorageModule,
//     ]
//   }
// )



declare function login(): void;
declare function register(): void;

// Component declaration
@Component({
  // HTML tag to use to embed component
  selector: 'app-root',
  // HTML file used
  templateUrl: './app.component.html',
  // Can have more than one
  styleUrls: ['./app.component.css']
})
// Any properties of the component/methods
export class AppComponent implements OnInit {
  title: string = 'ResearchApp';
  isSignedIn = false


  constructor(private router: Router, public firebaseService: FirebaseService) {
  }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else {
      this.isSignedIn = false
      this.router.navigate([''])
    }
  }

  handleLogout() {
    this.isSignedIn = false
    this.router.navigate(['/landing']);
  }

  handleLoginRegister() {
    alert("this button was clicked");
    this.router.navigate(['/login']);
  }
}
