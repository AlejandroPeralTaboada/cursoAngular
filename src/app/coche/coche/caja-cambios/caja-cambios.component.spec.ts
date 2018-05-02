import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaCambiosComponent } from './caja-cambios.component';

describe('CajaCambiosComponent', () => {
  let component: CajaCambiosComponent;
  let fixture: ComponentFixture<CajaCambiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaCambiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
