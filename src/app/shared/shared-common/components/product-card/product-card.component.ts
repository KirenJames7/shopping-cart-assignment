import { Component, Input } from "@angular/core";
import { NavService } from "../../../../core/services";
import {CartService, ProductService} from "../../../services";

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.component.html',
  styleUrls: [ 'product-card.component.css' ]
})
export class ProductCardComponent {
  @Input() doc_id: string;
  @Input() id: string;
  @Input() name: string;
  @Input() price: string;
  @Input() photo: string;
  @Input() likes: number;
  @Input() dislikes: number;
  @Input() quantity: number = 0;

  constructor (private navService: NavService, private productService: ProductService, private cartService:CartService) {}

  /**
   * Add product quantity
   */
  public addQuantity(): void {
    this.quantity += 1;
  }

  /**
   * Reduce product quantity
   */
  public reduceQuantity(): void {
    this.quantity !== 0 ? this.quantity -= 1 : this.quantity = 0;
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

  /**
   * Get a product
   * @param doc_id: string
   */
  private getProduct(doc_id: string): object {
    return this.productService.products[ this.productService.products.findIndex(product => product['doc_id'] === doc_id) ]['product'];
  }

  /**
   * Stop negative quantity
   * @param quantity: number
   */
  private validQuantityCheck(quantity:number): boolean {
    return quantity && true;
  }

  /**
   * Reset product quantity to 0
   */
  private resetProductQuantity(): void {
    this.quantity = 0;
  }

  private invalidQuantityAlert(): void {
    alert("Please update quantity to proceed.")
  }

  private successAlert() {
    alert(`Successfully added ${ this.quantity } NOS of ${ this.name } to your cart`);
    //reset product quantity on seccess
    this.resetProductQuantity();
  }

  /**
   * Add Product to Cart
   * @param doc_id: string
   * @param quantity: number
   */
  public addToCart(doc_id: string, quantity:number) {
    //validate quantity not 0
    if ( this.validQuantityCheck(quantity) ) {
      //update cart
      this.cartService.updateCartItem(doc_id, quantity, this.getProduct(doc_id));
      this.successAlert();
    } else {
      this.invalidQuantityAlert();
    }
  }
}
