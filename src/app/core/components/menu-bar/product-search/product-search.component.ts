import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../../shared/services";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Router } from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProductSearchResultComponent} from "./product-search-result/product-search-result.component";

@Component({
  selector: 'product-search',
  templateUrl: 'product-search.component.html',
  styleUrls: [ 'product-search.component.css' ]
})
export class ProductSearchComponent implements OnInit {
  private _products: string[] = [];
  private _filteredProducts: Observable<string[]>;

  constructor (private productService: ProductService, private router: Router, public dialog: MatDialog) { }

  get products(): string[] {
    return this._products;
  }

  set products(value: string[]) {
    this._products = value;
  }

  get filteredProducts(): Observable<string[]> {
    return this._filteredProducts;
  }

  set filteredProducts(value: Observable<string[]>) {
    this._filteredProducts = value;
  }

  /**
   * Open Search Result Modal
   * @param data
   */
  private openDialog(data: object): void {
    this.dialog.open(ProductSearchResultComponent, {
      width: '300px',
      data: data
    })
  }

  ngOnInit() {
    //get products
    this.productService.getProductsValue().subscribe(products => {
      products.filter(product => {
        //set product names to list
        this.products.push(product['name']);
      });
      //initialize search
      this.filteredProducts = this.productService.searchControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    });
  }

  /**
   * Filter products according to text entered
   * @param value: string
   * @private
   */
  private _filter(value: string): string[] {
    //convert text to lower case
    const filterValue = value.toLowerCase();
    //get matching products
    return this.products.filter(option => option.toLowerCase().includes(filterValue));
  }

  /**
   * On select event of search result
   * @param select:MatAutocompleteSelectedEvent
   */
  public selectProduct(select: MatAutocompleteSelectedEvent): void {
    //get products by name
    this.productService.getProductByName(select.option.value).subscribe(data => {
      let product = data.payload.doc.data();
      product[ `doc_id` ] = data.payload.doc.id;
      //open selected product in modal
      this.openDialog(product);
      this.clearSearch();
    });
  }

  /**
   * Clear search box
   */
  public clearSearch(): void {
    //empty search bar
    this.productService.searchControl.setValue("")
  }
}
