import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpattRecordComponent } from './empatt-record.component';

describe('EmpattRecordComponent', () => {
  let component: EmpattRecordComponent;
  let fixture: ComponentFixture<EmpattRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpattRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpattRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
