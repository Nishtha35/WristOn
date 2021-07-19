import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWatchComponent } from './men-watch.component';

describe('MenWatchComponent', () => {
  let component: MenWatchComponent;
  let fixture: ComponentFixture<MenWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
