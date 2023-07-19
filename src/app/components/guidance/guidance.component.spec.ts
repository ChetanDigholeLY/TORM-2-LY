import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidanceComponent } from './guidance.component';

describe('GuidanceComponent', () => {
  let component: GuidanceComponent;
  let fixture: ComponentFixture<GuidanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidanceComponent]
    });
    fixture = TestBed.createComponent(GuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
