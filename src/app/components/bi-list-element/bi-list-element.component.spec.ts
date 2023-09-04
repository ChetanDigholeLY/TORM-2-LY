import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiListElementComponent } from './bi-list-element.component';

describe('BiListElementComponent', () => {
  let component: BiListElementComponent;
  let fixture: ComponentFixture<BiListElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiListElementComponent]
    });
    fixture = TestBed.createComponent(BiListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
