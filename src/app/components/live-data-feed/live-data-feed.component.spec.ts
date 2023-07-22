import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDataFeedComponent } from './live-data-feed.component';

describe('LiveDataFeedComponent', () => {
  let component: LiveDataFeedComponent;
  let fixture: ComponentFixture<LiveDataFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveDataFeedComponent]
    });
    fixture = TestBed.createComponent(LiveDataFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
