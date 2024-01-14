import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormService } from 'src/app/_services/form.service'
import { Form } from 'src/app/models/form.model'
import { Observable, combineLatest, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-preview-panel',
  templateUrl: './preview-panel.component.html',
  styleUrls: ['./preview-panel.component.css']
})
export class PreviewPanelComponent implements OnInit {

  forms2500$!: Observable<Form[]>;
  forms4200$!: Observable<Form[]>;
  forms4500$!: Observable<Form[]>;

  editState: boolean = false;
  hide2500Form: boolean = true;
  hide4200Form: boolean = true;
  hide4500Form: boolean = true;
  formToEdit!: Form | null;

  namesArray$!: Observable<string[]>;
  names!: string[];
  chosenName: string = '';
  selectedFormType: string = '';
  selectedName: string = '';

  constructor(private formService: FormService, private clipboard: Clipboard) {
  }

  ngOnInit() {
    this.forms2500$ = this.formService.get2500Forms();
    this.forms4200$ = this.formService.get4200Forms();
    this.forms4500$ = this.formService.get4500Forms();
    this.generateNames();
  }

  generateNames(){
    var temp = combineLatest([this.forms2500$, this.forms4200$, this.forms4500$]).pipe(
      map(([form2500, form4200, form4500]) => form2500.concat(form4200, form4500))
    )
    this.namesArray$ = temp.pipe((map(form => {
        const allNames = form.map(p => p.primaryAdvisor)
        const distinctNames = [...new Set(allNames)]
        return distinctNames;
      })))
    temp = EMPTY
    this.namesArray$.subscribe(res => {
      this.names = res
    });
  }


  filterSelect(selectedWord: string) {
		this.selectedFormType = selectedWord;
    this.clearState();
    this.filterCheck()
	}

  filterName(name: string){
    this.selectedName = name;
    this.clearState();
    this.filterCheck()
  }

  filterCheck(){
    if(this.selectedName.length == 0){
      this.filterForms()
    }
    else{
      this.filterSearchForms()
    }
  }

  filterForms(){
    if(this.selectedFormType == "pending"){
      this.formService.pendingForms();
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    else if(this.selectedFormType == "approved"){
      this.formService.approvedForms();
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    else if(this.selectedFormType == "denied"){
      this.formService.deniedForms();
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    else{
      this.formService.defaultForms()
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    this.generateNames()
  }

  filterSearchForms(){
    if(this.selectedFormType == "pending"){
      this.formService.pendingSearchedForms(this.selectedName);
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    else if(this.selectedFormType == "approved"){
      this.formService.approvedSearchedForms(this.selectedName);
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    else if(this.selectedFormType == "denied"){
      this.formService.deniedSearchedForms(this.selectedName);
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
    else{
      this.formService.defaultSearchedForms(this.selectedName)
      this.forms2500$ = this.formService.get2500Forms();
      this.forms4200$ = this.formService.get4200Forms();
      this.forms4500$ = this.formService.get4500Forms();
    }
  }

  deleteForm(event: any, form: Form) {
    this.clearState();
    this.formService.deleteForm(form);
  }

  editForm(event: any, form: Form) {
    this.editState = true;
    this.formToEdit = form;
  }

  updateForm(form: Form) {
    this.formService.updateForm(form);
    this.clearState();
  }

  approveForm(event: any, form: Form){
    form.approved = true;
    form.denied = false;
    this.formService.updateForm(form);
    this.clearState();
  }

  unapproveForm(event: any, form: Form){
    form.approved = false;
    this.formService.updateForm(form);
    this.clearState();
  }

  deniedForm(event: any, form: Form){
    form.denied = true;
    form.approved = false;
    this.formService.updateForm(form);
    this.clearState();
  }

  copyKey(event: any, form: Form){
    this.clipboard.copy(form.id!)
    this.formService.updateForm(form);
  }

  clearState(){
    this.editState = false;
    this.formToEdit = null;
  }

}
