import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1basicComponent } from './comp1basic.component';

describe('Comp1basicComponent', () => {
  let component: Comp1basicComponent;
  let fixture: ComponentFixture<Comp1basicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1basicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1basicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
