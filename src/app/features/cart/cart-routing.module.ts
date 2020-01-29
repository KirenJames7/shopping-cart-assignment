import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./components";

const cartRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'items'
  },
  {
    component: CartComponent,
    path: 'items',
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(cartRoutes) ]
})

export class CartRoutingModule { }
