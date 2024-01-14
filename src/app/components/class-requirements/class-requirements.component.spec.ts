import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRequirementsComponent } from './class-requirements.component';

describe('ClassRequirementsComponent', () => {
  let component: ClassRequirementsComponent;
  let fixture: ComponentFixture<ClassRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
