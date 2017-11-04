import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvamGridComponent } from './avam-grid.component';


@NgModule({
  declarations: [
    AvamGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [AvamGridComponent],
  providers: [],
  bootstrap: []
})
export class AvamGridModule { }
