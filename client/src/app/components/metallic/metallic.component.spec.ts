import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallicComponent } from './metallic.component';

describe('MetallicComponent', () => {
  let component: MetallicComponent;
  let fixture: ComponentFixture<MetallicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetallicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
