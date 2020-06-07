import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzbatteryComponent } from './ezbattery.component';

describe('EzbatteryComponent', () => {
  let component: EzbatteryComponent;
  let fixture: ComponentFixture<EzbatteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzbatteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzbatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
