import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiinComponent } from './admiin.component';

describe('AdmiinComponent', () => {
  let component: AdmiinComponent;
  let fixture: ComponentFixture<AdmiinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmiinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
