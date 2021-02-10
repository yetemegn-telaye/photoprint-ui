import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUiComponent } from './signup-ui.component';

describe('SignupUiComponent', () => {
  let component: SignupUiComponent;
  let fixture: ComponentFixture<SignupUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
