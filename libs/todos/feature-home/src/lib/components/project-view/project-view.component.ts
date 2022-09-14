import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';
import { NzStatus } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IProject } from '../../model/IProject';

@Component({
  selector: 'todos-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less'],
})
export class ProjectViewComponent {
  @Input() projects!: IProject[];
  @Output() addProjectEvent = new EventEmitter();
  @Output() projectSelected = new EventEmitter();
  projectInputStatus: NzStatus = '';
  value = '';

  onAddProject(event: any) {
    if (this.value === '') {
      this.projectInputStatus = 'error';
      this.message.error("Project Name can't be empty!");
      return;
    }

    this.addProjectEvent.emit(event);
    this.projectInputStatus = '';
    this.value = '';
  }

  onProjectSelected(event: IProject) {
    this.projectSelected.emit(event);
  }

  constructor(private message: NzMessageService) {}
}
