import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationComponent } from './fabrication.component';

describe('FabricationComponent', () => {
  let component: FabricationComponent;
  let fixture: ComponentFixture<FabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
