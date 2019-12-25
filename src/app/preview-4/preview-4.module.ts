import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent, DynamicComponent, Preview4Component } from './preview-4.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations:    [Preview4Component, DynamicComponent, ChildComponent],
  imports:         [
    CommonModule,
    MatButtonModule
  ],
  entryComponents: [DynamicComponent],
  exports:         [Preview4Component]
})
export class Preview4Module {
}
