import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { ProductComponent } from '../product/product.component';
import { InitialState } from '../reducers/reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<InitialState>,
    private foodService: FoodService) { }

    @select('items') items$: Observable<Array<ProductComponent>>;

  banners = [
    {
      src:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80',
      alt: 'A tasty treat'
    },
    {
      src:
        'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80',
      alt: 'Chocolate covered pancakes'
    },
    {
      src:
        'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80',
      alt: 'Burger and fries'
    },
    {
      src:
        'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80',
      alt: 'Get ready to slice'
    }
  ];

  ngOnInit(): void {
    this.foodService.getAll();
  }

}
