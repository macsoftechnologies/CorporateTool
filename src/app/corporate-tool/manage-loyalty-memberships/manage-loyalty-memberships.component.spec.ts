import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoyaltyMembershipsComponent } from './manage-loyalty-memberships.component';

describe('ManageLoyaltyMembershipsComponent', () => {
  let component: ManageLoyaltyMembershipsComponent;
  let fixture: ComponentFixture<ManageLoyaltyMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLoyaltyMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLoyaltyMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
