import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioModuleComponent } from './bio-module.component';

describe('BioModuleComponent', () => {
  let component: BioModuleComponent;
  let fixture: ComponentFixture<BioModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
