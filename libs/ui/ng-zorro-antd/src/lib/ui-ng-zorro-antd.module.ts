import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {
  StepForwardOutline,
  SettingOutline,
  CalendarOutline,
  PlusOutline,
  ClockCircleOutline,
  ClockCircleTwoTone,
} from '@ant-design/icons-angular/icons';

const MODULES = [
  NzGridModule,
  NzButtonModule,
  NzCardModule,
  NzInputModule,
  NzIconModule,
  NzSpaceModule,
  NzRadioModule,
  NzCheckboxModule,
  NzListModule,
  NzMessageModule,
];

const icons: IconDefinition[] = [
  StepForwardOutline,
  SettingOutline,
  CalendarOutline,
  PlusOutline,
  ClockCircleOutline,
  ClockCircleTwoTone,
];

@NgModule({
  imports: [CommonModule, NzIconModule.forRoot(icons)],
  exports: MODULES,
})
export class UiNgZorroAntdModule {}
