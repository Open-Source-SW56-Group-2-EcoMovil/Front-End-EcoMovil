import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAcquirerComponent } from './filter-acquirer.component';

describe('FilterAcquirerComponent', () => {
  let component: FilterAcquirerComponent;
  let fixture: ComponentFixture<FilterAcquirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAcquirerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAcquirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
