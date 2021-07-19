import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenWatchComponent } from './women-watch.component';

describe('WomenWatchComponent', () => {
  let component: WomenWatchComponent;
  let fixture: ComponentFixture<WomenWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
