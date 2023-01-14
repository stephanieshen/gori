import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'gori-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //initial state
  product!: Product;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

}
