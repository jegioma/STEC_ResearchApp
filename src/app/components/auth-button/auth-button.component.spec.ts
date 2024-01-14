import { ComponentFixture, TestBed, tick, async } from '@angular/core/testing';

import { AuthButtonComponent } from './auth-button.component';

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take you to login component when not logged in', async(() =>
  {
    // spyOn(AuthButtonComponent, 'onClick');

    // let button = fixture.debugElement.nativeElement.querySelector('button');
    // button.click();

    // tick();

    // expect(AuthButtonComponent.onClick).toHaveBeenCalled();

  }));

  it('should take you to landing page component when logging out when logged in', () =>
  {
    
  })
});
