import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePageComponent } from './vehicleAcquirer-page.component';

describe('VehiclePageComponent', () => {
  let component: VehiclePageComponent;
  let fixture: ComponentFixture<VehiclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
