import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/components";
import {LoginComponent, RegisterComponent} from "./core/components";


const routes: Routes = [
  {
    component: MainComponent,
    loadChildren: () => import('./features/feature.module').then(m => m.FeatureModule),
    path: ''
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
