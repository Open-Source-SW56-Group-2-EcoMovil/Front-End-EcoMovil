import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterUniversityStudentComponent } from './register-university-student.component';

describe('RegisterUniversityStudentComponent', () => {
  let component: RegisterUniversityStudentComponent;
  let fixture: ComponentFixture<RegisterUniversityStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUniversityStudentComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUniversityStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
