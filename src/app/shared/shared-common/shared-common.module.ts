import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDialogModule } from "@angular/material/dialog";
import {COMPONENTS, SERVICES} from "../index";
import {AngularFireModule} from "@angular/fire";
import {firebaseConfig} from "../../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {MatGridListModule} from "@angular/material/grid-list";
import {AngularFireDatabaseModule} from "@angular/fire/database";

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    ...SERVICES
  ]
})

export class SharedCommonModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: SharedCommonModule,
      providers: [...SERVICES]
    }
  }
}
