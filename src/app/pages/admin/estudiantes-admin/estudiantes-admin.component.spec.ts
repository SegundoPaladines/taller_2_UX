import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesAdminComponent } from './estudiantes-admin.component';

describe('EstudiantesAdminComponent', () => {
  let component: EstudiantesAdminComponent;
  let fixture: ComponentFixture<EstudiantesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantesAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiantesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
