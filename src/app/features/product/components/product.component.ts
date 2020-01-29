import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services';

@Component({
  templateUrl: 'product.component.html',
  styleUrls: [ 'product.component.css' ]
})

export class ProductComponent implements OnInit {

  public prod = [];
  constructor( private productService: ProductService ){}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.productService.products = data.map(res => { return { doc_id: res.payload.doc.id, product: res.payload.doc.data() } })
    });
  }
}
