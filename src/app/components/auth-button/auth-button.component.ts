import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/_services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})

export class AuthButtonComponent implements OnInit {

  // declare text as string to accept it as input
  @Input() text!: string;

  // btnClick is the name of event that will emit
  @Output() btnClick = new EventEmitter();

  constructor(private router: Router, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.firebaseService.logout()
    this.btnClick.emit();
    this.registerClick();
  }

  registerClick() {
    this.router.navigate(['']);
  }
}
