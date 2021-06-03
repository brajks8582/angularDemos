import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymusicComponent } from './displaymusic.component';

describe('DisplaymusicComponent', () => {
  let component: DisplaymusicComponent;
  let fixture: ComponentFixture<DisplaymusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaymusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
