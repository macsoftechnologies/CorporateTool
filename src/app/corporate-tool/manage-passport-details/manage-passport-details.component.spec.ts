import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePassportDetailsComponent } from './manage-passport-details.component';

describe('ManagePassportDetailsComponent', () => {
  let component: ManagePassportDetailsComponent;
  let fixture: ComponentFixture<ManagePassportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePassportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePassportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
