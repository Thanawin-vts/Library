import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormatterComponent } from './date-formatter.component';

describe('DateFormatterComponent', () => {
  let component: DateFormatterComponent;
  let fixture: ComponentFixture<DateFormatterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateFormatterComponent]
    });
    fixture = TestBed.createComponent(DateFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
