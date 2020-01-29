import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./components";

const productRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    component: ProductComponent,
    path: 'list'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(productRoutes) ]
})

export class ProductRoutingModule { }
