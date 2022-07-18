import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '@todos/dashboard';




@NgModule({
  imports: [CommonModule],
  exports: [DashboardModule]
})
export class FeModule {}
