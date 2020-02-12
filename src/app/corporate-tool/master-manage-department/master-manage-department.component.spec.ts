import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterManageDepartmentComponent } from './master-manage-department.component';

describe('MasterManageDepartmentComponent', () => {
  let component: MasterManageDepartmentComponent;
  let fixture: ComponentFixture<MasterManageDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterManageDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterManageDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
