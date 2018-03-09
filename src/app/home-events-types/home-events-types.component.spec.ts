import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventsTypesComponent } from './home-events-types.component';

describe('HomeEventsTypesComponent', () => {
  let component: HomeEventsTypesComponent;
  let fixture: ComponentFixture<HomeEventsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEventsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
