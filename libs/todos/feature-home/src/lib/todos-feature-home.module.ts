import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UiNgZorroAntdModule } from '@todos/ui-ng-zorro-antd';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  HomeComponent
]

@NgModule({
  imports: [CommonModule, FormsModule, UiNgZorroAntdModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class TodosFeatureHomeModule {}
