import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesUserComponent } from './estudiantes-user.component';

describe('EstudiantesUserComponent', () => {
  let component: EstudiantesUserComponent;
  let fixture: ComponentFixture<EstudiantesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiantesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
