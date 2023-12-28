import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasUserComponent } from './programas-user.component';

describe('ProgramasUserComponent', () => {
  let component: ProgramasUserComponent;
  let fixture: ComponentFixture<ProgramasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
