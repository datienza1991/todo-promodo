import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NgZorroAntdModule } from '@todos/ng-zorro-antd';

@NgModule({
  imports: [CommonModule,NgZorroAntdModule],
  declarations: [ProjectsListComponent, TaskListComponent],
  exports: [ProjectsListComponent, TaskListComponent],
})
export class DashboardModule {}
