import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptparametercompComponent } from './optparametercomp.component';

describe('OptparametercompComponent', () => {
  let component: OptparametercompComponent;
  let fixture: ComponentFixture<OptparametercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptparametercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptparametercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
