import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberFormComponent } from './saber-form.component';

describe('SaberFormComponent', () => {
  let component: SaberFormComponent;
  let fixture: ComponentFixture<SaberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaberFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
