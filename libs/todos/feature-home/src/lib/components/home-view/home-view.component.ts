import { Component } from '@angular/core';

@Component({
  selector: 'todos-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less'],
})
export class HomeViewComponent {
  projects = [{ name: 'project 1' }, { name: 'project 2' }];
  projectName = '';
  taskName = '';
  constructor() {
    // Intialized imports here
  }
  onAddProject() {
    this.projects.push({ name: this.projectName });
  }
}
