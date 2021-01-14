import { Component, OnInit } from '@angular/core';
import {Product} from "../classes/Product";
import {ProductService} from "../services/product.service";
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  prod!:Product;
  constructor() { }

  ngOnInit(): void {
  
  }

  saveProduct():void{


  }

}
