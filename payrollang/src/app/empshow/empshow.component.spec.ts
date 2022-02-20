import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpshowComponent } from './empshow.component';

describe('EmpshowComponent', () => {
  let component: EmpshowComponent;
  let fixture: ComponentFixture<EmpshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
