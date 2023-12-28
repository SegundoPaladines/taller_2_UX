import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberUserComponent } from './saber-user.component';

describe('SaberUserComponent', () => {
  let component: SaberUserComponent;
  let fixture: ComponentFixture<SaberUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaberUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaberUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
