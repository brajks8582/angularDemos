import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmBuildercompComponent } from './frm-buildercomp.component';

describe('FrmBuildercompComponent', () => {
  let component: FrmBuildercompComponent;
  let fixture: ComponentFixture<FrmBuildercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmBuildercompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmBuildercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
