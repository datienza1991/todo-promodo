import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todos-countdown-timer-view',
  templateUrl: './countdown-timer-view.component.html',
  styleUrls: ['./countdown-timer-view.component.less'],
})
export class CountdownTimerViewComponent  {
  @Input() isShowPauseCountdownButton = true;
  @Input() isShowPlayCountdownButton = false;
  @Output() stopCountdown = new EventEmitter();
  @Output() showPauseCountdownButton = new EventEmitter();
  @Output() showPlayCountdownButton = new EventEmitter();

  onStopCountdown() {
    this.stopCountdown.emit();
  }

  onShowPauseCountdownButton(){
    this.showPauseCountdownButton.emit();
  }

  onShowPlayCountdownButton(){
    this.showPlayCountdownButton.emit();
  }
}
