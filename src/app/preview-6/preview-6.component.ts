import {
  Compiler,
  Component,
  ComponentFactoryResolver, Injector,
  NgModule,
  NgModuleRef,
  OnInit, Renderer, Renderer2, SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


const template = `<div>hello, {{name}}</div>`;

const createC = () => Component({
  template,
  selector: 'app-on-the-fly'
})(class TestClass {
  name = 'Test';
  //
  // constructor(private r: Renderer2) {
  //   console.log(r);
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('new changes: ', changes);
  }

  ngOnInit(): void {
    console.log('INIT');
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
  }
});

const createM = (declarations: Type<any>[]) => NgModule({ declarations, imports: [CommonModule, BrowserModule] })(class TestModule {
});

@Component({
  selector:    'app-preview-on-the-fly',
  templateUrl: './preview-6.component.html',
  styleUrls:   ['./preview-6.component.scss']
})
export class Preview6Component {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(
    private _c: Compiler,
    private injector: Injector,
    private ngModuleRef: NgModuleRef<any>
  ) {

  }

  createComponent() {
    const cmp = createC();

    this
      ._c
      .compileModuleAndAllComponentsAsync(createM([cmp]))
      .then(m => m.componentFactories[ 0 ])
      .then(cFct => this.container.createComponent(
        cFct,
        undefined,
        this.injector,
        undefined,
        this.ngModuleRef)
      );
  }
}
