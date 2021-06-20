import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloodAvailabilityComponent } from './view-blood-availability.component';

describe('ViewBloodAvailabilityComponent', () => {
  let component: ViewBloodAvailabilityComponent;
  let fixture: ComponentFixture<ViewBloodAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloodAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBloodAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
