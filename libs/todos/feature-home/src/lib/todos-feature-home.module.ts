import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { UiNgZorroAntdModule } from '@todos/ui-ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { TodosSharedPipesModule } from '@todos/todos/shared/pipes';

const COMPONENTS = [HomeComponent, HomeViewComponent];
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
