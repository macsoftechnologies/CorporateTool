import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterManageBandsComponent } from './master-manage-bands.component';

describe('MasterManageBandsComponent', () => {
  let component: MasterManageBandsComponent;
  let fixture: ComponentFixture<MasterManageBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterManageBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterManageBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
