import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadesUserComponent } from './facultades-user.component';

describe('FacultadesUserComponent', () => {
  let component: FacultadesUserComponent;
  let fixture: ComponentFixture<FacultadesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultadesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultadesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
