import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAboutMeComponent } from './bio-about-me.component';

describe('BioAboutMeComponent', () => {
  let component: BioAboutMeComponent;
  let fixture: ComponentFixture<BioAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
