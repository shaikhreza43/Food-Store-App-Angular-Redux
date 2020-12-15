import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { InitialState } from './reducers/reducer';
import { LoadItems } from './store/actions';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient,
    private ngRedux: NgRedux<InitialState>) { }

    getAll() {
      this.http
        .get('https://food-store-app-nodejs-be.herokuapp.com/fruits')
        .subscribe((products: Array<ProductComponent>) => {
          this.ngRedux.dispatch(LoadItems(products));
        });
    }
}
