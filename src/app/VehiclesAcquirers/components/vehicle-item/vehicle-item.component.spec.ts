import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleItemComponent } from './vehicle-item.component';

describe('VehicleItemComponent', () => {
  let component: VehicleItemComponent;
  let fixture: ComponentFixture<VehicleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
