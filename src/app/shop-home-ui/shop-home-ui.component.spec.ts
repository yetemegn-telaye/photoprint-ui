import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomeUiComponent } from './shop-home-ui.component';

describe('ShopHomeUiComponent', () => {
  let component: ShopHomeUiComponent;
  let fixture: ComponentFixture<ShopHomeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopHomeUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
