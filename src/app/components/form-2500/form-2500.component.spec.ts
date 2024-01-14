import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { Form2500Component } from './form-2500.component';

describe('Form2500Component', () => {
  let component: Form2500Component;
  let fixture: ComponentFixture<Form2500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form2500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2500Component);
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

  it('should successfully submit a 2500 form with information', () =>
  {

  });

  it('should not submit a 2500 form with no information', () =>
  {

  });
});
