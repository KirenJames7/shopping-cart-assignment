import { NgModule } from "@angular/core";
import { COMPONENTS } from "./index";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartRoutingModule} from "./cart-routing.module";
import {SharedCommonModule} from "../../shared/shared-common/shared-common.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CartRoutingModule,
    SharedCommonModule.forRoot(),
    CommonModule
  ],
  providers: []
})

export class CartModule { }
