import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpermissionsComponent } from './adminpermissions.component';

describe('AdminpermissionsComponent', () => {
  let component: AdminpermissionsComponent;
  let fixture: ComponentFixture<AdminpermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
