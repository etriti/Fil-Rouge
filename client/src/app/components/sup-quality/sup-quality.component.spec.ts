import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupQualityComponent } from './sup-quality.component';

describe('SupQualityComponent', () => {
  let component: SupQualityComponent;
  let fixture: ComponentFixture<SupQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
