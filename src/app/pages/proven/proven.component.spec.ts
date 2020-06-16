import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvenComponent } from './proven.component';

describe('ProvenComponent', () => {
  let component: ProvenComponent;
  let fixture: ComponentFixture<ProvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
