import { Component, OnInit } from '@angular/core';
import {Product} from "../classes/Product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from '@angular/router';
import { Customer } from '../classes/Customer';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  customer!:Customer[];
  prod!:Product;
  constructor(private service:ProductService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  this.prod=new Product('','','',this.customer);
  }

  saveProduct():void{

this.service.save(this.prod).subscribe(param=> console.log(param));
  }

  comeBack():void{

    this.router.navigate(['product']);

  }

  reset() {
   
    window.location.reload();
  }

}
