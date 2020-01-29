import { Injectable } from "@angular/core";
import { NavService } from "../../core/services";
import { Item } from "../../features/cart/models/item.model";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import { UserService } from "../../core/services";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable()
export class CartService {
  private _userCart;
  private _items: Item[];
  private _total_quantity: number = 0;
  private _total_price: number = 0;

  constructor( private navService: NavService, private db: AngularFirestore, private userService: UserService, private auth: AngularFireAuth) {
    if ( this.navService.isUserActive ) {
      this.loadCart();
    }
  }

  get userCart() {
    return this._userCart;
  }

  set userCart(value) {
    this._userCart = value;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    this._items = value;
  }

  get total_quantity(): number {
    return this._total_quantity;
  }

  set total_quantity(value: number) {
    this._total_quantity = value;
  }

  get total_price(): number {
    return this._total_price;
  }

  set total_price(value: number) {
    this._total_price = value;
  }

  /**
   * Get user cart
   */
  private getUserCart(): Observable<any> {
    if ( this.navService.isUserActive ) {
      return this.db.doc(`carts/${ this.userService.userDetails.uid }`).valueChanges();
    }
  }

  /**
   * Create New Cart
   */
  public createNewCart() {
    this.db.collection('carts').doc(`${this.userService.userDetails.uid}`).set({cart: []});
  }

  /**
   * Get cart product index by doc
   * @param doc_id: string
   */
  private getCartProductIndexByDoc(doc_id: string): number {
    return this.userCart.cart.findIndex(list => list.doc_id === doc_id);
  }

  /**
   * Get cart product index by id
   * @param cart: array
   * @param id: string
   */
  private getCartProductIndexByID(cart: any[], id: string): number {
    return cart.findIndex(list => list.product.id === id);
  }

  /**
   * Generate product as reference
   */
  private generateProductReference():void {
    this.userCart.cart.forEach(list => {
      //generate product reference
      list.product = this.db.doc( `products/${ list.doc_id }`).ref
      //delete doc id
      delete list.doc_id;
    });
  }

  /**
   * Prepare user cart
   * @param doc_id: string
   * @param quantity: number
   * @param product: object
   */
  private prepUserCart(doc_id: string, quantity: number, product: object): void {
    //check if product exists in cart
     if ( this.userCart.cart[ this.getCartProductIndexByDoc(doc_id) ] !== undefined ) {
       //update existing cart item quantity
       this.userCart.cart[ this.getCartProductIndexByDoc(doc_id) ].quantity += quantity;
     } else {
       //add new item to cart
       this.userCart.cart.push({ doc_id: doc_id, product: product, quantity: quantity })
     }
     //generate product reference
     this.generateProductReference();
  }

  /**
   * Prepare guest cart
   * @param product: object
   * @param quantity: number
   */
  private prepGuestCart(product: object, quantity: number): string {
    //load cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart'));
    //check if product exists in cart
    if ( cart[ this.getCartProductIndexByID(cart, product['id']) ] !== undefined ) {
      //update existing cart item quantity
      cart[ this.getCartProductIndexByID(cart, product['id']) ].quantity += quantity;
    } else {
      //add new item to cart
      cart.push({ product: product, quantity: quantity });
    }
    //stringify cart
    return JSON.stringify(cart);
  }

  /**
   * Update user cart
   */
  private updateUserCart():void {
    this.db.doc(`carts/${ this.userService.userDetails.uid }`).set({ cart: this.userCart.cart });
  }

  /**
   * Update Cart Item
   * @param doc_id: string
   * @param quantity: number
   * @param product: object
   */
  public updateCartItem(doc_id: string, quantity: number, product: object): void {
    //check if user active
    if ( this.navService.isUserActive ) {
      //prepare user cart
      this.prepUserCart(doc_id, quantity, product);
      //update user cart
      this.updateUserCart();
    } else {
      //update guest cart
      localStorage.setItem('cart', this.prepGuestCart(product, quantity));
      //load cart
      this.loadCart();
    }
  }

  /**
   * Remove cart item
   * @param doc_id: string
   * @param id: string
   */
  public deleteCartItem(doc_id: string, id: string): void {
    //check if user active
    if ( this.navService.isUserActive ) {
      //remove cart item
      this.userCart.cart.splice(this.userCart.cart.findIndex(list => list.doc_id === doc_id), 1);
      //render cart
      this.renderCart(this.userCart.cart);
      //generate product reference
      this.generateProductReference();
      //update user cart
      this.updateUserCart();
    } else {
      //get guest cart
      let cart = JSON.parse(localStorage.getItem('cart'));
      //remove item
      cart.splice(cart.findIndex(list => list.id === id), 1);
      //render cart
      this.renderCart(cart);
      //update guest cart
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  /**
   * Check if cart is empty
   */
  public isCartEmpty(): boolean {
    //check if user active
    if ( this.navService.isUserActive ) {
      //check user items
      return !!this.navService.items.length;
    } else {
      //check guest cart
      if ( JSON.parse(localStorage.getItem('cart')).length !== undefined ) {
        return !!JSON.parse(localStorage.getItem('cart')).length;
      }
    }
  }

  /**
   * Render Cart
   * @param cart: array
   * @param cart_total_quantity: number
   * @param cart_total_price: number
   */
  private renderCart(cart: any[], cart_total_quantity: number = 0, cart_total_price: number = 0) {
    //Reset cart items
    this.navService.items = [];
    //loop through cart
    for (let i = 0; i < cart.length; i++) {
      //add items to cart
      this.navService.items.push({product: cart[i].product, quantity: cart[i].quantity, doc_id: cart[i].doc_id });
      //update quantity total & price total
      cart_total_quantity += cart[i].quantity;
      cart_total_price += cart[i].product.price * cart[i].quantity;
      this.navService.cart_total_quantity = cart_total_quantity;
      this.navService.cart_total_price = cart_total_price;
    }
  }

  /**
   * Load Cart
   */
  public loadCart(): void {
    //check if user active
    if ( this.navService.isUserActive ) {
      //get user cart
      this.getUserCart().subscribe(data => {
        this.userCart = data;
        //map through cart
        this.userCart.cart.map(async (list, index) => {
          //get product from product reference
          await list.product.get().then(async snap => {
            list.product = await snap.data();
            list.doc_id = snap.id;
            //check last cart item
            if ( this.userCart.cart.length === index +1 ) {
              //wait for reference
              setTimeout(() => {
                //render user cart
                this.renderCart(this.userCart.cart);
              }, 100);
            }
          });
        });
      });
    } else {
      //render user cart
      this.renderCart(JSON.parse(localStorage.getItem('cart')));
    }
  }
}
