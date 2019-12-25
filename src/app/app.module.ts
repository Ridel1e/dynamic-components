import { BrowserModule } from '@angular/platform-browser';
import { Compiler, Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Preview1Module } from './preview-1/preview-1.module';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Preview2Module } from './preview-2/preview-2.module';
import { Preview3Module } from './preview-3/preview-3.module';
import { Preview4Module } from './preview-4/preview-4.module';
import { Preview5Module } from './preview-5/preview-5.module';
import { Preview6Module } from './preview-6/preview-6.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createJitCompiler() {
  return new JitCompilerFactory().createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports:      [
    BrowserModule,
    Preview1Module,
    Preview2Module,
    Preview3Module,
    Preview4Module,
    Preview5Module,
    Preview6Module,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers:    [{ provide: Compiler, useFactory: createJitCompiler }],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
