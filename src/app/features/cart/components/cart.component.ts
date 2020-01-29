import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item.model';
import { ProductService } from '../../../shared/services';
import { CartService } from "../../../shared/services";
import {NavService} from "../../../core/services";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../../core/services";

@Component({
  templateUrl: 'cart.component.html',
  styleUrls: [ 'cart.component.css' ]
})

export class CartComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService, private navService:NavService ) { }

  ngOnInit() {

  }
}
