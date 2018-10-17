import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatementComponent } from './order-statement.component';

describe('OrderStatementComponent', () => {
  let component: OrderStatementComponent;
  let fixture: ComponentFixture<OrderStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
