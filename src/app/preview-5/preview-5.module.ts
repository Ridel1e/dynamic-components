import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Preview5Component } from './preview-5.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [Preview5Component],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:      [Preview5Component]
})
export class Preview5Module {
}
