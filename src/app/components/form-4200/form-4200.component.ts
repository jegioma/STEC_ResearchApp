import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/_services/firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-4200',
  templateUrl: './form-4200.component.html',
  styleUrls: ['./form-4200.component.css'],
})

export class Form4200Component {
  formGroup: any;
  ngOnInit() {
    
  }

  constructor(public fbService: FirebaseService, private firestore: AngularFirestore) { }

  semesters = this.getYear();
  currentDate = formatDate(new Date(), 'shortDate', 'en')
  areaFTextArea: boolean = false;
  submitted = false;

  getYear() {
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    if (currentMonth >= 11)
    {
      return [`Fall ${currentYear + 1}`, `Summer ${currentYear + 1}`, `Spring ${currentYear + 1}`];
    }
    else if (11 > currentMonth && currentMonth >= 8) {
      return [`Fall ${currentYear}`, `Spring ${currentYear + 1}`, `Summer ${currentYear + 1}`];
    }
    else if (8 > currentMonth && currentMonth >= 5) {
      return [`Fall ${currentYear}`, `Summer ${currentYear}`, `Spring ${currentYear + 1}`];
    }
    else {
      return [`Spring ${currentYear}`, `Summer ${currentYear}`, `Fall ${currentYear}`];
    }
  }

  surveyLogout() {
    this.fbService.logout();
  }

  hideAreaF() {
    this.areaFTextArea = false;
  }

  showAreaF() {
    this.areaFTextArea = true;
  }
  
  submit(form: NgForm) { 
    console.log("Form submitted. Student name: ", form.form.value)
    var newForm = form.form.value
    newForm["submitted"] = true
    newForm["approved"] = false
    newForm["denied"] = false
    newForm["formNumber"] = "4200"
    newForm["time"] = new Date()
    this.submitted = true;
  
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("forms4200")
        .add(newForm)
        .then(res => { }, err => reject(err));
    });
  }
}
