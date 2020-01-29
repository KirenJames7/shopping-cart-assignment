import {Component, Inject, Input} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  doc_id: string;
  id: string;
  name: string;
  price: string;
  photo: string;
  likes: number;
  dislikes: number;
  quantity: number;
}

@Component({
  templateUrl: 'product-search-result.component.html',
  styleUrls: [ 'product-search-result.component.css' ]
})

export class ProductSearchResultComponent {

  constructor(public dialogRef: MatDialogRef<ProductSearchResultComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.quantity = 0;
  }

}
