import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';

import { UiNgZorroAntdModule } from '@todos/ui-ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { TodosSharedPipesModule } from '@todos/todos/shared/pipes';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { TaskViewComponent } from './components/task-view/task-view.component';

const COMPONENTS = [
  HomeComponent,
  ProjectViewComponent,
  TaskViewComponent,
];

const MODULES = [
  CommonModule,
  FormsModule,
  UiNgZorroAntdModule,
  TodosSharedPipesModule,
];

@NgModule({
  imports: [MODULES],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class TodosFeatureHomeModule {}
