import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeType } from '@ant-design/icons-angular';
import { IInputClock } from '../../model/IInputClock';
import { IProject } from '../../model/IProject';
import { ITask } from '../../model/ITask';

@Component({
  selector: 'todos-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less'],
})
export class HomeViewComponent {
  @Input() projects!: IProject[];
  @Input() tasks!: ITask[];
  @Input() taskToBeCompletedCount!: number;
  @Input() taskCompletedCount!: number;
  @Input() project!: IProject;
  @Input() inputClocks!: IInputClock[];
  @Input() taskClocks = [0];
  @Output() addProjectEvent = new EventEmitter();
  @Output() addTaskEvent = new EventEmitter();
  @Output() updateTaskEvent = new EventEmitter();
  @Output() updateInputIconClockMouseOver = new EventEmitter();
  @Output() updateInputIconClockMouseLeave = new EventEmitter();
  @Output() selectClock = new EventEmitter();

  taskName = '';

  constructor() {
    // Intialized imports here
  }

  onAddProject(event: any) {
    this.addProjectEvent.emit(event);
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
