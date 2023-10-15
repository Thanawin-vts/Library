import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiVowelComponent } from './thai-vowel.component';

describe('ThaiVowelComponent', () => {
  let component: ThaiVowelComponent;
  let fixture: ComponentFixture<ThaiVowelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThaiVowelComponent]
    });
    fixture = TestBed.createComponent(ThaiVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
