import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUiTwoComponent } from './signup-ui-two.component';

describe('SignupUiTwoComponent', () => {
  let component: SignupUiTwoComponent;
  let fixture: ComponentFixture<SignupUiTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupUiTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUiTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
