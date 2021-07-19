import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UCartComponent } from './u-cart.component';

describe('UCartComponent', () => {
  let component: UCartComponent;
  let fixture: ComponentFixture<UCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
