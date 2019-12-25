import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent, Preview1Component } from './preview-1.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations:    [
    Preview1Component,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:         [
    Preview1Component
  ],
  entryComponents: [
    DynamicComponent
  ]
})
export class Preview1Module {
}
