import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/_services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false

  constructor(private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }


  verifyEmail(studentID: string, email: string, password: string) {
    if (email.endsWith("@ggc.edu"))
      this.onSignup(studentID, email, password)
    else
      alert("Please enter a ggc email");
  }

  async onSignup(studentID: string, email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
    this.router.navigate(['student']);
  }



  backClick() {
    this.router.navigate(['login']);
  }
}
