import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePreferencesComponent } from './manage-preferences.component';

describe('ManagePreferencesComponent', () => {
  let component: ManagePreferencesComponent;
  let fixture: ComponentFixture<ManagePreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
