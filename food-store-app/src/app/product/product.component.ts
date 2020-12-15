import { NgRedux } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import { InitialState } from '../reducers/reducer';
import { AddToCart, RemoveFromCart } from '../store/actions';

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  inCart = false;
  @Input() product: Product;

  constructor(private ngRedux: NgRedux<InitialState>) { }

  ngOnInit(): void {
  }

  addToCart(item: Product) {
    this.ngRedux.dispatch(AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.ngRedux.dispatch(RemoveFromCart(item));
    this.inCart = false;
  }
}
