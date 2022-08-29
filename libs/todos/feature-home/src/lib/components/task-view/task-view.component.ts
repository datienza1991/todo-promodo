import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInputClock } from '../../model/IInputClock';
import { IProject } from '../../model/IProject';
import { ITask } from '../../model/ITask';

@Component({
  selector: 'todos-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.less'],
})
export class TaskViewComponent {
  @Input() tasks!: ITask[];
  @Input() taskToBeCompletedCount!: number;
  @Input() taskCompletedCount!: number;
  @Input() project!: IProject;
  @Input() inputClocks!: IInputClock[];
  @Input() taskClocks = [0];

  @Output() addTaskEvent = new EventEmitter();
  @Output() updateTaskEvent = new EventEmitter();
  @Output() updateInputIconClockMouseOver = new EventEmitter();
  @Output() updateInputIconClockMouseLeave = new EventEmitter();
  @Output() selectClock = new EventEmitter();

  taskName = '';

  constructor() {
    // Intialized imports here
  }

 

  onAddTask(event: any) {
    this.addTaskEvent.emit(event);
  }

  onUpdateTask(task: ITask) {
    this.updateTaskEvent.emit(task);
  }

  changeIconThemeOver(inputClock: IInputClock) {
    this.updateInputIconClockMouseOver.emit(inputClock);
  }

  changeIconThemeLeave() {
    this.updateInputIconClockMouseLeave.emit();
  }

  onSelectClock(inputClock: IInputClock) {
    this.selectClock.emit(inputClock);
  }
}
