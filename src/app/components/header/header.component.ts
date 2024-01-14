import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/_services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isSignedIn: boolean = false;
  buttonName: string = '';


  constructor(private router: Router, public firebaseService: FirebaseService ) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') != null) {
      localStorage.setItem('user', 'no reload');
      // alert('user is logged in');
      this.buttonName = 'Logout';


    }
    else {
      // alert('user is logged out');
      this.buttonName = 'Login';
      localStorage.removeItem('user');
    }
  }
  onClick() {
      if (localStorage.getItem('user') != null) {
        this.buttonName = 'Logout';
        this.firebaseService.logout();


      }
      else {
        this.router.navigate(["/login"]);
        this.buttonName = 'Login';
      }
  }
}
