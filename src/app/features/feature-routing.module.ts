import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const featureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    path: 'products'
  },
  {
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
    path: 'cart'
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(featureRoutes) ]
})

export class FeatureRoutingModule { }
