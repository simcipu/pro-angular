
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from "../classes/Product";
import {ProductService} from "../services/product.service";



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {
 product=new Array<Product>();

  constructor(private service:ProductService,private router: Router) { }
  ngOnDestroy(): void {
    //this.service.getProduct().subscribe().unsubscribe;
  
  }

  ngOnInit(): void {
    
this.service.getProduct().subscribe(response => 
  {
    this.product = response.map(item => 
    {
      return new Product( 
          item.serialNumber,
          item.name,
          item.type,
          item.customer
      );
    });

  
  });

}
open(id:string) {
  this.router.navigate(['customer', id]);
}

delete(id:string) {
  this.service.deleteById(id).subscribe(param=> console.log(param));
  window.location.reload();
}


}