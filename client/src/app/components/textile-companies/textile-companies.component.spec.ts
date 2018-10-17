import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileCompaniesComponent } from './textile-companies.component';

describe('TextileCompaniesComponent', () => {
  let component: TextileCompaniesComponent;
  let fixture: ComponentFixture<TextileCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
