import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginUIComponent } from './user-login-ui.component';

describe('UserLoginUIComponent', () => {
  let component: UserLoginUIComponent;
  let fixture: ComponentFixture<UserLoginUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
