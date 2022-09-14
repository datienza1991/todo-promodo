import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NzStatus } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IInputClock } from '../../model/IInputClock';
import { IProject } from '../../model/IProject';
import { IModifiedTask, ITask } from '../../model/ITask';

@Component({
  selector: 'todos-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.less'],
})
export class TaskViewComponent implements OnChanges {
  @Input() tasks: ITask[] = [];
  @Input() taskToBeCompletedCount!: number;
  @Input() taskCompletedCount!: number;
  @Input() project = {} as IProject;
  @Input() inputClocks!: IInputClock[];
  @Input() taskClocks = [0];

  @Output() addTaskEvent = new EventEmitter();
  @Output() updateTaskEvent = new EventEmitter();
  @Output() updateInputIconClockMouseOver = new EventEmitter();
  @Output() updateInputIconClockMouseLeave = new EventEmitter();
  @Output() selectClock = new EventEmitter();

  taskName = '';
  taskInputStatus: NzStatus = '';
  modifiedTasks: IModifiedTask[] = [];

  constructor(private message: NzMessageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'tasks') {
        this.getTasks()
        return;
      }
    }
  }

  getTasks() {
    this.modifiedTasks = this.tasks.map(this.modifyTask);
    console.log(this.modifiedTasks);
  }

  modifyTask(task: ITask) {
    const notDoneCount = task.promodoroCount - task.promodoroDoneCount;
    return { ...task, promodoroNotDoneCount: notDoneCount };
  }

  onAddTask(event: any) {
    if (this.taskName === '') {
      this.taskInputStatus = 'error';
      this.message.error("Task Name can't be empty!");
      return;
    }

    if (this.project.id === undefined) {
      this.taskInputStatus = 'error';
      this.message.error('Please select project!');
      return;
    }

    this.addTaskEvent.emit(event);
    this.taskName = '';
    this.taskInputStatus = '';
  }

  onUpdateTask(task: IModifiedTask) {
    this.updateTaskEvent.emit(task);
  }

  changeIconThemeOver(inputClock: IInputClock) {
    if (this.taskName === '') {
      return;
    }

    this.updateInputIconClockMouseOver.emit(inputClock);
  }

  changeIconThemeLeave() {
    this.updateInputIconClockMouseLeave.emit();
  }

  onSelectClock(inputClock: IInputClock) {
    if (this.taskName === '') {
      return;
    }

    this.selectClock.emit(inputClock);
  }
}
