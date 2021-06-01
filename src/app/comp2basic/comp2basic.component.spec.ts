import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2basicComponent } from './comp2basic.component';

describe('Comp2basicComponent', () => {
  let component: Comp2basicComponent;
  let fixture: ComponentFixture<Comp2basicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp2basicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2basicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
