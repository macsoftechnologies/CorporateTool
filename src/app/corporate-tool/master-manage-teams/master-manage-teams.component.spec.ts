import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterManageTeamsComponent } from './master-manage-teams.component';

describe('MasterManageTeamsComponent', () => {
  let component: MasterManageTeamsComponent;
  let fixture: ComponentFixture<MasterManageTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterManageTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterManageTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
