import { NgModule } from "@angular/core";
import { COMPONENTS } from "./index";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";
import {SharedCommonModule} from "../../shared/shared-common/shared-common.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    SharedCommonModule.forRoot(),
    CommonModule
  ],
  providers: []
})

export class ProductModule { }
