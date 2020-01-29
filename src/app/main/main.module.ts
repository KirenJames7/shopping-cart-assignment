import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { COMPONENTS } from "./index";
import { CoreModule } from "../core/core.module";
import {CommonModule} from "@angular/common";
import {BaseComponent} from "./components";


@NgModule({
  declarations: [...COMPONENTS],
  exports: [ BaseComponent ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  providers: []
})

export class MainModule { }
