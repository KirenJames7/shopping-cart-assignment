import { LoginComponent, MenuBarComponent, ProductSearchComponent, ProductSearchResultComponent, RegisterComponent } from "./components";
import { AuthService, NavService, RegisterService, UserService } from "./services";

export const COMPONENTS = [
  LoginComponent,
  MenuBarComponent,
  ProductSearchComponent,
  ProductSearchResultComponent,
  RegisterComponent
];

export const SERVICES = [
  AuthService,
  UserService,
  NavService,
  RegisterService
];
