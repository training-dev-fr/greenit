import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  page:number;
  productList:any[];
  constructor() {
    this.page = 1;
    this.productList = [];
  }

  ngOnInit(): void {
    this.getProductByPage();
  }

  async getProductByPage() {
    let result = await fetch(`http://localhost:3000/product/${this.page}`);
    let data = await result.json();
    this.productList = data;
  }
}
