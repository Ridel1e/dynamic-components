import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-lazy-dynamic',
  template: 'static dynamic here!'
})
class DynamicComponentB {

}

@NgModule({
  declarations: [DynamicComponentB]
})
export class SyncModule {
}
