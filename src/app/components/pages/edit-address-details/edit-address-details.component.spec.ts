import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressDetailsComponent } from './edit-address-details.component';

describe('EditAddressDetailsComponent', () => {
  let component: EditAddressDetailsComponent;
  let fixture: ComponentFixture<EditAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddressDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
