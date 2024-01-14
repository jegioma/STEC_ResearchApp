import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/_services/form.service'
import { Form } from 'src/app/models/form.model'
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  forms2500$!: Observable<Form[]>;
  forms4200$!: Observable<Form[]>;
  forms4500$!: Observable<Form[]>;
  forms$!: Observable<Form[]>
  keySearch = '';

  constructor(private formService: FormService) { }

  ngOnInit() {

  }

  handleSubmit(e: any){
    e.preventDefault();
    console.log(this.keySearch);
    this.formService.keySearchForms(this.keySearch)
    this.forms2500$ = this.formService.get2500Forms();
    this.forms4200$ = this.formService.get4200Forms();
    this.forms4500$ = this.formService.get4500Forms();
    this.forms$= combineLatest([this.forms2500$, this.forms4200$, this.forms4500$]).pipe(
      map(([form2500, form4200, form4500]) => form2500.concat(form4200, form4500))
    )
  }

  handleKeyUp(e: any){
    if(e.keyCode === 13){
       this.handleSubmit(e);
    }
 }
 
 updateForm(form: Form) {
  this.formService.updateForm(form);
  // this.clearState();
 }
}
