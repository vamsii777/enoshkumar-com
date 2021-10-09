import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdialogComponent } from './comdialog.component';

describe('ComponentsdialogComponent', () => {
  let component: ComdialogComponent;
  let fixture: ComponentFixture<ComdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
