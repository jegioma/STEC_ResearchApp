import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { Form4200Component } from './form-4200.component';

describe('Form4200Component', () => {
  let component: Form4200Component;
  let fixture: ComponentFixture<Form4200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form4200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form4200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
