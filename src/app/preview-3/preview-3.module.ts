import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent, Preview3Component } from './preview-3.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations:    [Preview3Component, DynamicComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  entryComponents: [DynamicComponent],
  exports:         [Preview3Component]
})
export class Preview3Module {
}
