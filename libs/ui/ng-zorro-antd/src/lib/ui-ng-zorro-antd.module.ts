import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  StepForwardOutline,
  SettingOutline,
  CalendarOutline,
  PlusOutline,
} from '@ant-design/icons-angular/icons';

const MODULES = [
  NzGridModule,
  NzButtonModule,
  NzCardModule,
  NzInputModule,
  NzIconModule,
];

const icons: IconDefinition[] = [
  StepForwardOutline,
  SettingOutline,
  CalendarOutline,
  PlusOutline
];

@NgModule({
  imports: [CommonModule, NzIconModule.forRoot(icons)],
  exports: MODULES,
})
export class UiNgZorroAntdModule {}
