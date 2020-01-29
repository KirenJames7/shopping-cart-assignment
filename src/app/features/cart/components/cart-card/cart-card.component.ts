import { Component, Input, Output } from "@angular/core";
import { NavService } from "../../../../core/services";
import {Item} from "../../models/item.model";
import {CartService} from "../../../../shared/services";
import {ProductService} from "../../../../shared/services";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../../../core/services";

@Component({
  selector: 'cart-card',
  templateUrl: 'cart-card.component.html',
  styleUrls: [ 'cart-card.component.css' ]
})
export class CartCardComponent {
  @Input() doc_id: string;
  @Input() id: string;
  @Input() name: string;
  @Input() price: string;
  @Input() public quantity: number;
  @Input() public line_total: string;
  @Input() photo: string;
  @Input() likes: number;
  @Input() dislikes: number;

  constructor(private navService: NavService, private cartService: CartService, private productService: ProductService, private userService: UserService, private db: AngularFirestore) {}

  /**
   * Recalculate Item Line Total
   */
  private recalculateLineTotal(): void {
    this.line_total = (this.quantity * Number(this.price)).toFixed(2).toString();
  }

  /**
   * Recalculate Cart Quantity
   * @param increase: boolean
   */
  private recalculateQuantity(increase: boolean): void {
    if ( increase ) {
      //add item quantity
      this.quantity += 1;
      //add cart quantity
      this.navService.cart_total_quantity += 1;
    } else {
      //reduce item quantity
      this.quantity !== 0 ? this.quantity -= 1 : this.quantity = 0;
      //reduce cart quantity
      this.navService.cart_total_quantity -= 1;
    }
  }

  /**
   * Recalculate Cart Total
   * @param increase: boolean
   */
  private recalculateTotal(increase: boolean): void {
    this.recalculateLineTotal();
    if ( increase ) {
      //add cart total
      this.navService.cart_total_price += Number(this.price);
    } else {
      //reduce cart total
      this.navService.cart_total_price -= Number(this.price);
    }
  }

  /**
   * Add cart quantity
   */
  public addQuantity(): void {
    //add cart quantity
    this.recalculateQuantity(true);
    //add cart total
    this.recalculateTotal(true);
  }

  /**
   * Reduce cart quantity
   */
  public reduceQuantity(): void {
    //reduce cart quantity
    this.recalculateQuantity(false);
    //reduce cart total
    this.recalculateTotal(false);
  }

  /**
   * Update Product Like Count
   * @param doc_id: string
   * @param likes: number
   */
  public like(doc_id: string, likes: number): void {
    //set the new like count
    this.likes = Number(likes) + 1;
    //update like count
    this.productService.updateProduct(doc_id, { likes: this.likes });
  }

  /**
   * Update Product Dislike Count
   * @param doc_id: string
   * @param dislikes: number
   */
  public dislike(doc_id: string, dislikes: number): void {
    //set the new dislike count
    this.dislikes = Number(dislikes) + 1;
    //update dislike count
    this.productService.updateProduct(doc_id, { dislikes: this.dislikes });
  }

  private successAlert(): void {
    alert(`Successfully removed ${ this.name } from your cart`);
  }

  /**
   *  Remove Item from Cart
   * @param doc_id: string
   * @param id: string
   */
  public removeItem(doc_id: string, id: string) {
    //update cart
    this.cartService.deleteCartItem(doc_id, id);
    //success alert
    this.successAlert();
  }
}
