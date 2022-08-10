import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HomeViewComponent } from './components/home-view/home-view.component'
import { UiNgZorroAntdModule } from '@todos/ui-ng-zorro-antd';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  HomeComponent,
  HomeViewComponent
]

@NgModule({
  imports: [CommonModule, FormsModule, UiNgZorroAntdModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class TodosFeatureHomeModule {}
