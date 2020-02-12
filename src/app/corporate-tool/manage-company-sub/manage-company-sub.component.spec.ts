import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanySubComponent } from './manage-company-sub.component';

describe('ManageCompanySubComponent', () => {
  let component: ManageCompanySubComponent;
  let fixture: ComponentFixture<ManageCompanySubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompanySubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
