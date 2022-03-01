import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleUserApplicationsComponent } from './list-single-user-applications.component';

describe('ListSingleUserApplicationsComponent', () => {
  let component: ListSingleUserApplicationsComponent;
  let fixture: ComponentFixture<ListSingleUserApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingleUserApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleUserApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
