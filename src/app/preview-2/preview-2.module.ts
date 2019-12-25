import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent, Preview2Component } from './preview-2.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations:    [Preview2Component, DynamicComponent],
  imports:         [
    CommonModule,
    MatButtonModule
  ],
  entryComponents: [DynamicComponent],
  exports:         [Preview2Component]
})
export class Preview2Module {
}
