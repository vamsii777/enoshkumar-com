import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CellChurchComponent } from './cell-church.component';

describe('CellChurchComponent', () => {
  let component: CellChurchComponent;
  let fixture: ComponentFixture<CellChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
