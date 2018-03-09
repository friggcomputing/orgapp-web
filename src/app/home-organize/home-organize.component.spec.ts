import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrganizeComponent } from './home-organize.component';

describe('HomeOrganizeComponent', () => {
  let component: HomeOrganizeComponent;
  let fixture: ComponentFixture<HomeOrganizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOrganizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOrganizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
