import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { InitialState } from '../reducers/reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.ngRedux
      .select<Array<Product>>('cart')
      .subscribe((items: Array<Product>) => {
        this.cart = items;
      });
  }
  cart: Array<Product>;

  ngOnInit(): void {
  }

}
