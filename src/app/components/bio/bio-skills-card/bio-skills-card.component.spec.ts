import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioSkillsCardComponent } from './bio-skills-card.component';

describe('BioSkillsCardComponent', () => {
  let component: BioSkillsCardComponent;
  let fixture: ComponentFixture<BioSkillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioSkillsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioSkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
