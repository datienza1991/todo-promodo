import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProject } from '../../model/IProject';

@Component({
  selector: 'todos-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.less'],
})
export class ProjectViewComponent implements OnInit {
  @Input() projects!: IProject[];
  @Output() addProjectEvent = new EventEmitter();

  onAddProject(event: any) {
    this.addProjectEvent.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
