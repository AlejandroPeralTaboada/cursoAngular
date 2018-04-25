import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuevoComponent } from './huevo.component';

describe('HuevoComponent', () => {
  let component: HuevoComponent;
  let fixture: ComponentFixture<HuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
