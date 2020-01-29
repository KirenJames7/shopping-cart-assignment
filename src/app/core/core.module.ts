import { NgModule } from "@angular/core";
import { COMPONENTS, SERVICES } from "./index";

import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {SharedCommonModule} from "../shared/shared-common/shared-common.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductSearchResultComponent} from "./components";

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedCommonModule.forRoot()
  ],
  providers: [
    ...SERVICES
  ],
  entryComponents: [
    ProductSearchResultComponent
  ]
})

export class CoreModule { }
