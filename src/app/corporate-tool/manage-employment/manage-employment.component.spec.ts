import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmploymentComponent } from './manage-employment.component';

describe('ManageEmploymentComponent', () => {
  let component: ManageEmploymentComponent;
  let fixture: ComponentFixture<ManageEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
