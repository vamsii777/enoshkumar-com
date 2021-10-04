import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthMinistryComponent } from './youth-ministry.component';

describe('YouthMinistryComponent', () => {
  let component: YouthMinistryComponent;
  let fixture: ComponentFixture<YouthMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouthMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
