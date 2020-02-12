import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonalDetailsComponent } from './manage-personal-details.component';

describe('ManagePersonalDetailsComponent', () => {
  let component: ManagePersonalDetailsComponent;
  let fixture: ComponentFixture<ManagePersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
