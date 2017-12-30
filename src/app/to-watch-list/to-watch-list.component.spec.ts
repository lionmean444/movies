import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWatchListComponent } from './to-watch-list.component';

describe('ToWatchListComponent', () => {
  let component: ToWatchListComponent;
  let fixture: ComponentFixture<ToWatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToWatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
