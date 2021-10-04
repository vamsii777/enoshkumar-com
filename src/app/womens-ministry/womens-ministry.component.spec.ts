import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensMinistryComponent } from './womens-ministry.component';

describe('WomensMinistryComponent', () => {
  let component: WomensMinistryComponent;
  let fixture: ComponentFixture<WomensMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
