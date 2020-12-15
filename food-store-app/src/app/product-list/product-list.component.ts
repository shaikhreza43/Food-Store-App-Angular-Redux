import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() fruits: Array<ProductComponent>;

  constructor() { }

  ngOnInit(): void {
  }

}
