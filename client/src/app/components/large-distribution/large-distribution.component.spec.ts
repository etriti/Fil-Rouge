import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDistributionComponent } from './large-distribution.component';

describe('LargeDistributionComponent', () => {
  let component: LargeDistributionComponent;
  let fixture: ComponentFixture<LargeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
