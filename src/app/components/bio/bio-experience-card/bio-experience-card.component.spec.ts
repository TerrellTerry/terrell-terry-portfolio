import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioExperienceCardComponent } from './bio-experience-card.component';

describe('BioExperienceCardComponent', () => {
  let component: BioExperienceCardComponent;
  let fixture: ComponentFixture<BioExperienceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioExperienceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioExperienceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
