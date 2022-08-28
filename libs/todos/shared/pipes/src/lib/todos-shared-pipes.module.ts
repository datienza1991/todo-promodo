import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberToArrayPipe } from './numberToArray/number-to-array.pipe';

const PIPES = [NumberToArrayPipe];

@NgModule({
  imports: [CommonModule],
  exports: [PIPES],
  declarations: [PIPES],
})
export class TodosSharedPipesModule {}
