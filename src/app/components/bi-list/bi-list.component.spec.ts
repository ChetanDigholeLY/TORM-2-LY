import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiListComponent } from './bi-list.component';

describe('BiListComponent', () => {
  let component: BiListComponent;
  let fixture: ComponentFixture<BiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiListComponent]
    });
    fixture = TestBed.createComponent(BiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
