import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsThumbnailsComponent } from './events-thumbnails.component';

describe('EventsThumbnailsComponent', () => {
  let component: EventsThumbnailsComponent;
  let fixture: ComponentFixture<EventsThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
