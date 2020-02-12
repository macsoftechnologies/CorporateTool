import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterManageDesignationsComponent } from './master-manage-designations.component';

describe('MasterManageDesignationsComponent', () => {
  let component: MasterManageDesignationsComponent;
  let fixture: ComponentFixture<MasterManageDesignationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterManageDesignationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterManageDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
