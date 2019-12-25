import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-lazy-dynamic',
  template: 'lazy dynamic here!'
})
class DynamicComponentA {

}

@NgModule({
  declarations: [DynamicComponentA]
})
export class LazyModule {
}
