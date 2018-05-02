import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedaleraComponent } from './pedalera.component';

describe('PedaleraComponent', () => {
  let component: PedaleraComponent;
  let fixture: ComponentFixture<PedaleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedaleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
