import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyesterComponent } from './polyester.component';

describe('PolyesterComponent', () => {
  let component: PolyesterComponent;
  let fixture: ComponentFixture<PolyesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolyesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
