import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageunavailableComponent } from './pageunavailable.component';

describe('PageunavailableComponent', () => {
  let component: PageunavailableComponent;
  let fixture: ComponentFixture<PageunavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageunavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageunavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
