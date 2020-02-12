import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterManageGradesComponent } from './master-manage-grades.component';

describe('MasterManageGradesComponent', () => {
  let component: MasterManageGradesComponent;
  let fixture: ComponentFixture<MasterManageGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterManageGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterManageGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
