import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensMinistryComponent } from './childrens-ministry.component';

describe('ChildrensMinistryComponent', () => {
  let component: ChildrensMinistryComponent;
  let fixture: ComponentFixture<ChildrensMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrensMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
