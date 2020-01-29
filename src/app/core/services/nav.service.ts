import { Injectable } from "@angular/core";

@Injectable()
export class NavService {
  private _isUserActive: boolean = false;
  private _cart_total_price: number = 0;
  private _cart_total_quantity: number = 0;
  private _items = [];

  constructor() { }

  get isUserActive(): boolean {
    return this._isUserActive;
  }

  set isUserActive(value: boolean) {
    this._isUserActive = value;
  }

  get cart_total_quantity(): number {
    return this._cart_total_quantity;
  }

  set cart_total_quantity(value: number) {
    this._cart_total_quantity = value;
  }

  get cart_total_price(): number {
    return this._cart_total_price;
  }

  set cart_total_price(value: number) {
    this._cart_total_price = value;
  }

  get items() {
    return this._items;
  }

  set items(value) {
    this._items = value;
  }
}
