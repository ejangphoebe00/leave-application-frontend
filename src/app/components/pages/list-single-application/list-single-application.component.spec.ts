import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleApplicationComponent } from './list-single-application.component';

describe('ListSingleApplicationComponent', () => {
  let component: ListSingleApplicationComponent;
  let fixture: ComponentFixture<ListSingleApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingleApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
