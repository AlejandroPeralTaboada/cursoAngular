import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortillaComponent } from './tortilla.component';

describe('TortillaComponent', () => {
  let component: TortillaComponent;
  let fixture: ComponentFixture<TortillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
