import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerViewComponent } from './countdown-timer-view.component';

describe('CountdownTimerViewComponent', () => {
  let component: CountdownTimerViewComponent;
  let fixture: ComponentFixture<CountdownTimerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountdownTimerViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownTimerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
