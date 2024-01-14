
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Form4500Component } from './form-4500.component';


describe('Form4500Component', () => {
  let component: Form4500Component;
  let fixture: ComponentFixture<Form4500Component>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ Form4500Component ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form4500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() =>
  {
    TestBed.configureTestingModule(
      {
        declarations: [Form4500Component],
        imports: [ReactiveFormsModule]
      }
    );
      const fixture = TestBed.createComponent(Form4500Component);
      component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined component', () =>
  {
    expect(component).toBeDefined();
  });

  it('should create a FormGroup comprised of FormControls', () =>
  {
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBe(true);
  });

  it('should successfully submit a 4500 form with information', () =>
  {

  });

  it('should not submit a 4500 form with with no information', () =>
  {

  });
});
