import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAcquirerComponent } from './register-acquirer.component';

describe('RegisterAcquirerComponent', () => {
  let component: RegisterAcquirerComponent;
  let fixture: ComponentFixture<RegisterAcquirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAcquirerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAcquirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
