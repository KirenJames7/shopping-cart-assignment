import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services";
import { UserService } from "../../services";
import { NavService } from "../../services";
import { AngularFireAuth } from "@angular/fire/auth";
import { CartService } from "../../../shared/services";
import {ProductService} from "../../../shared/services";

@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.component.html',
  styleUrls: [ 'menu-bar.component.css' ]
})
export class MenuBarComponent implements OnInit {
  private _title: string = 'Shopping Cart';
  private _displayName: string;
  private _photoUrl: string = null;

  constructor(private angularFireAuth: AngularFireAuth, private userService: UserService, private authService: AuthService, private navService: NavService, private cartService: CartService, private productService: ProductService ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if ( user ) {
        switch ( user.providerData[0].providerId  ) {
          case 'password' : {
            this.userService.userDetails = {
              uid: user.uid,
              username: user.displayName
            };
            this.displayName = user.email;
            this.photoUrl = null;
            break;
          }
          case 'facebook.com': {
            this.userService.userDetails = {
              uid: user.uid,
              username: user.displayName
            };
            this.displayName = user.displayName;
            this.photoUrl = user.photoURL;
            break;
          }
          case 'google.com': {
            this.userService.userDetails = {
              uid: user.uid,
              username: user.displayName
            };
            this.displayName = user.displayName;
            this.photoUrl = user.photoURL;
            break;
          }
          case 'github.com': {
            this.userService.userDetails = {
              uid: user.uid,
              username: user.displayName
            };
            this.displayName = user.displayName;
            this.photoUrl = user.photoURL;
            break;
          }
        }
        this.navService.isUserActive = true;
      }
    });
    if (JSON.parse(localStorage.getItem('cart')) === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    }

    this.cartService.loadCart();
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get photoUrl(): string {
    return this._photoUrl;
  }

  set photoUrl(value: string) {
    this._photoUrl = value;
  }

  /**
   * Reset product search list
   */
  public resetProductList(): void {
    this.productService.getProductsValue().subscribe(data => {
      this.productService.products = data;
      this.productService.searchControl.setValue("");
    });
  }

  /**
   * Logout user
   */
  public doLogout(): void {
    this.displayName = "";
    //change user active state
    this.navService.isUserActive = false;
    //log out user
    this.authService.logout();
    //reload cart
    this.cartService.loadCart();
  }

  ngOnInit() {}
}
