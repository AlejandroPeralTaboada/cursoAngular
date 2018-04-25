import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacalaoComponent } from './bacalao.component';

describe('BacalaoComponent', () => {
  let component: BacalaoComponent;
  let fixture: ComponentFixture<BacalaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacalaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
