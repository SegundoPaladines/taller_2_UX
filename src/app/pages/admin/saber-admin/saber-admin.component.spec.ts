import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberAdminComponent } from './saber-admin.component';

describe('SaberAdminComponent', () => {
  let component: SaberAdminComponent;
  let fixture: ComponentFixture<SaberAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaberAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaberAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
