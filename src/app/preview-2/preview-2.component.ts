import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter, Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, Renderer2,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
              <div
                style="position: absolute; top: 400px; left: 200px; background: white; border: 1px solid red; font-size: 20px; padding: 1rem"
                (click)="handleClick()"
              >
                hello, {{name}}
              </div>`
})
export class DynamicComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;

  @Output() sayHello = new EventEmitter<void>();

  handleClick() {
    this.sayHello.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('new changes: ', changes);
  }

  ngOnInit(): void {
    console.group('Dynamic component:');
    console.log('INIT');
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
    console.groupEnd();
  }
}

@Component({
  selector:    'app-preview-body',
  templateUrl: './preview-2.component.html',
  styleUrls:   ['./preview-2.component.scss']
})
export class Preview2Component {
  currentComponent: ComponentRef<DynamicComponent> | null = null;

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private renderer: Renderer2
  ) {
  }

  createComponent() {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    const factory = this.cfr.resolveComponentFactory(DynamicComponent);
    this.currentComponent = factory.create(this.injector, null);

    this.appRef.attachView(this.currentComponent.hostView);
    this.renderer.appendChild(document.body, (this.currentComponent.hostView as any).rootNodes[0]);

    console.log(this.appRef);
  }


  destroyComponent() {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    console.log(this.appRef);
  }
}
