import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadesAdminComponent } from './facultades-admin.component';

describe('FacultadesAdminComponent', () => {
  let component: FacultadesAdminComponent;
  let fixture: ComponentFixture<FacultadesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultadesAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultadesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
