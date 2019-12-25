import { Compiler, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SyncModule } from './sync.module';

@Component({
  selector:    'app-preview-compiler',
  templateUrl: './preview-5.component.html',
  styleUrls:   ['./preview-5.component.scss']
})
export class Preview5Component {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(private _compiler: Compiler,) {
  }

  syncModule() {
    this._compiler.compileModuleAndAllComponentsAsync(SyncModule)
      .then(compiledLm => compiledLm.componentFactories[ 0 ])
      .then(cFct => this.container.createComponent(cFct));
  }

  asyncModule() {
    import('./lazy.module')
      .then(m => m.LazyModule)
      .then(lazyModule => this._compiler.compileModuleAndAllComponentsAsync(lazyModule))
      .then(compiledLm => compiledLm.componentFactories[ 0 ])
      .then(cFct => this.container.createComponent(cFct));
  }

}
