import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArticlesListComponent } from './dashboard-articles-list.component';

describe('DashboardArticlesListComponent', () => {
  let component: DashboardArticlesListComponent;
  let fixture: ComponentFixture<DashboardArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
