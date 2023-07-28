import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgedGuidanceComponent } from './acknowledged-guidance.component';

describe('AcknowledgedGuidanceComponent', () => {
  let component: AcknowledgedGuidanceComponent;
  let fixture: ComponentFixture<AcknowledgedGuidanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcknowledgedGuidanceComponent]
    });
    fixture = TestBed.createComponent(AcknowledgedGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
