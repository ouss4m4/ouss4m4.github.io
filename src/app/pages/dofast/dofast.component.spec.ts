import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DofastComponent } from './dofast.component';

describe('DofastComponent', () => {
  let component: DofastComponent;
  let fixture: ComponentFixture<DofastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DofastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DofastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
