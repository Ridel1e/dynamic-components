import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  template: '<div (click)="handleClick()">hello, {{name}}</div>',
  changeDetection: ChangeDetectionStrategy.OnPush
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
  selector:    'app-preview-simple',
  templateUrl: './preview-1.component.html',
  styleUrls:   ['./preview-1.component.scss']
})
export class Preview1Component implements OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  currentComponent: ComponentRef<DynamicComponent> | null = null;

  ctrl = new FormControl(null);

  ctrlValueChange = this
    .ctrl
    .valueChanges
    .subscribe(val => {
      if (this.currentComponent) {
        this.currentComponent.instance.name = val;

        const cdr = this.currentComponent.injector.get(ChangeDetectorRef);
        cdr.markForCheck();
      }
    });

  constructor(private cfr: ComponentFactoryResolver) {
  }

  createComponent() {
    this.container.clear();

    const factory: ComponentFactory<any> = this.cfr.resolveComponentFactory(DynamicComponent);
    this.currentComponent = this.container.createComponent(factory);
  }

  clearContainer() {
    this.container.clear();
  }

  destroyComponent() {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
  }

  ngOnDestroy(): void {
    this.destroyComponent();
    this.ctrlValueChange.unsubscribe();
  }
}
