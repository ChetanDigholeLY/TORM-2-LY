import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAcknowledgedGuidanceComponent } from './not-acknowledged-guidance.component';

describe('NotAcknowledgedGuidanceComponent', () => {
  let component: NotAcknowledgedGuidanceComponent;
  let fixture: ComponentFixture<NotAcknowledgedGuidanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAcknowledgedGuidanceComponent]
    });
    fixture = TestBed.createComponent(NotAcknowledgedGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
