import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeApplicationComponent } from './compute-application.component';

describe('ComputeApplicationComponent', () => {
  let component: ComputeApplicationComponent;
  let fixture: ComponentFixture<ComputeApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputeApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
