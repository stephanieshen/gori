import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/shared/models/product.model';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'gori-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  dummyProducts!: Product[];

  constructor(
    private bsModalService: BsModalService
  ) { }

  ngOnInit(): void {
    // TODO: remove dummy
    this.dummyProducts = [
      { id: 1, name: 'Product Name 1', brand: 'Brand 1', quantity: 20, price: 200 },
      { id: 2, name: 'Product Name 2', brand: 'Brand 2', quantity: 5, price: 100 },
      { id: 3, name: 'Product Name 3', brand: 'Brand 3', quantity: 2, price: 600 },
      { id: 4, name: 'Product Name 4', brand: 'Brand 4', quantity: 10, price: 150 },
      { id: 5, name: 'Product Name 5', brand: 'Brand 5', quantity: 1, price: 250 },
      { id: 6, name: 'Product Name 6', brand: 'Brand 6', quantity: 7, price: 80 },
      { id: 7, name: 'Product Name 7', brand: 'Brand 7', quantity: 8, price: 120 }
    ];
  }

  openProductDetails(product: Product): void {
    this.bsModalService.show(ProductDetailsComponent, {
      class: 'modal-dialog-centered modal-lg',
      initialState: {
        product: product
      }
    });
  }
}


