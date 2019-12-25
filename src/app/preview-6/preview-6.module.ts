import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Preview6Component } from './preview-6.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [Preview6Component],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:      [Preview6Component]
})
export class Preview6Module {
}
