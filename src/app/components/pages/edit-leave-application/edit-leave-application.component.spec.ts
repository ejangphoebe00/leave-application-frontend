import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveApplicationComponent } from './edit-leave-application.component';

describe('EditLeaveApplicationComponent', () => {
  let component: EditLeaveApplicationComponent;
  let fixture: ComponentFixture<EditLeaveApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeaveApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLeaveApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
