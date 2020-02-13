import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPreferencesComponent } from './company-preferences.component';

describe('CompanyPreferencesComponent', () => {
  let component: CompanyPreferencesComponent;
  let fixture: ComponentFixture<CompanyPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
