import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiReportComponent } from './bi-report.component';

describe('BiReportComponent', () => {
  let component: BiReportComponent;
  let fixture: ComponentFixture<BiReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiReportComponent]
    });
    fixture = TestBed.createComponent(BiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
