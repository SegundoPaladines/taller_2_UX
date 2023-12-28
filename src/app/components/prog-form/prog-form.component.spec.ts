import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgFormComponent } from './prog-form.component';

describe('ProgFormComponent', () => {
  let component: ProgFormComponent;
  let fixture: ComponentFixture<ProgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
