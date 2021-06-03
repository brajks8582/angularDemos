import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompmusicComponent } from './compmusic.component';

describe('CompmusicComponent', () => {
  let component: CompmusicComponent;
  let fixture: ComponentFixture<CompmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompmusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
