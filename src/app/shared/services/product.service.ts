import { Injectable} from '@angular/core';
import { Product } from '../../features/product/models/product.model';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, Subject} from "rxjs";
import {flatMap} from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Injectable()
export class ProductService {
  private _products: unknown[];
  private _searchControl = new FormControl();

  constructor( private db: AngularFirestore ) {  }

  get products(): unknown[] {
    return this._products;
  }

  set products(value: unknown[]) {
    this._products = value;
  }

  get searchControl(): FormControl {
    return this._searchControl;
  }

  set searchControl(value: FormControl) {
    this._searchControl = value;
  }

  /**
   * Get Products
   */
  public getProducts() {
    return this.db.collection('products').snapshotChanges();
  }

  /**
   * Get Product Values
   */
  public getProductsValue() {
    return this.db.collection('products').valueChanges();
  }

  /**
   * Get Product By Name
   * @param name: string
   */
  public getProductByName(name: string): Observable<any> {
    return this.db.collection('products', ref => ref.where('name', '==', name)).snapshotChanges().pipe(flatMap(data => data));
  }

  /**
   * Get Product By ID
   * @param id: string
   */
  public getProductById(id: string): Observable<any> {
    return this.db.collection('products', ref => ref.where('id', '==', id)).snapshotChanges().pipe(flatMap(data => data));
  }

  /**
   * Update Product
   * @param doc_id: string
   * @param data: object
   */
  public updateProduct(doc_id: string, data: object): void {
    this.db.doc(`products/${ doc_id }`).set(data, { merge: true });
  }
}
