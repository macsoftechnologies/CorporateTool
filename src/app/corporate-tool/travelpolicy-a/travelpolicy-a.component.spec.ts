import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelpolicyAComponent } from './travelpolicy-a.component';

describe('TravelpolicyAComponent', () => {
  let component: TravelpolicyAComponent;
  let fixture: ComponentFixture<TravelpolicyAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelpolicyAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelpolicyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
