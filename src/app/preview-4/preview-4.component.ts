import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector, Input, OnChanges,
  OnDestroy, OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef, ViewRef
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `I'am A dynamic Child!!! {{something}}`
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
  @Input() something: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('new changes: ', changes);
  }

  ngOnInit(): void {
    console.log('INIT');
  }

  ngOnDestroy(): void {
    console.log('DESTROY');
  }
}

@Component({
  selector: 'app-dynamic',
  template: 'children: <ng-content></ng-content>'
})
export class DynamicComponent {

}

@Component({
  selector:    'app-preview-projection',
  templateUrl: './preview-4.component.html',
  styleUrls:   ['./preview-4.component.scss']
})
export class Preview4Component implements OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  private vrs: ViewRef[] = [];

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
  }

  createComponent(tr: TemplateRef<any>) {
    const factory = this.cfr.resolveComponentFactory(DynamicComponent);

    const viewRef = tr.createEmbeddedView(null);
    this.vrs.push(viewRef);

    this
      .container
      .createComponent(factory, 0, null, [viewRef.rootNodes]);
    this.appRef.attachView(viewRef);

    console.log(this.appRef);
  }

  clearContainer() {
    this.container.clear();
    this.vrs.forEach(vr => vr.destroy());
    console.log(this.appRef);
  }

  ngOnDestroy(): void {
    this.clearContainer();
  }
}
