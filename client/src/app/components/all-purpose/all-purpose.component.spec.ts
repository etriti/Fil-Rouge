import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurposeComponent } from './all-purpose.component';

describe('AllPurposeComponent', () => {
  let component: AllPurposeComponent;
  let fixture: ComponentFixture<AllPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
