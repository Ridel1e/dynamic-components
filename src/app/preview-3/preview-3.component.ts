import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Inject, Injectable,
  InjectionToken, Injector, OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormControl } from '@angular/forms';

const PARAMS = new InjectionToken('Params');

@Injectable({
  providedIn: 'root'
})
class TestClass {

}

@Component({
  selector: 'app-dynamic',
  template: `
              <div>Hello, {{params}}</div>`
})
export class DynamicComponent {
  constructor(@Inject(PARAMS) private params: any) {
  }

}

@Component({
  selector:    'app-preview-injector',
  templateUrl: './preview-3.component.html',
  styleUrls:   ['./preview-3.component.scss']
})
export class Preview3Component implements OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  ctrl = new FormControl(null);

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {
  }

  createComponent() {
    const factory = this.cfr.resolveComponentFactory(DynamicComponent);

    this
      .container
      .createComponent(factory, 0, Injector.create({
        providers: [{ provide: PARAMS, useValue: this.ctrl.value }],
        parent:    this.injector
      }));
  }

  clearContainer() {
    this.container.clear();
  }

  ngOnDestroy(): void {
    this.clearContainer();
  }
}
