import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  user$  = this.auth.user
  constructor(private router: Router, private auth: AngularFireAuth) { }

  ngOnInit(){
    this.user$.subscribe(info => {
      if (info!.email !== "steccoordinator@ggc.edu") {
        this.router.navigate(['student']);
      }
    })
  }
}