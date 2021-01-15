import { Component, OnInit } from '@angular/core';
import {Product} from "../classes/Product";
import {Customer} from "../classes/Customer";
import { Router} from '@angular/router';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-cerca-product',
  templateUrl: './cerca-product.component.html',
  styleUrls: ['./cerca-product.component.css']
})
export class CercaProductComponent implements OnInit {

  surname!:string;
  type!:string;
  product=new Array<Product>();
  
  show!:boolean;
  constructor(private service:ProductService,private router: Router) { }

  ngOnInit(): void {
    this.show=false;
  }


  cerca(surname:string,type:string){

this.service.getForType(type).subscribe(param=> {
  
  this.product=param
  console.log(param);
if(this.product===null){
  this.product=new Array<Product>();
}else{
  this.show=true;
}

})

this.service.getForSurname(surname).subscribe(param=>{

  this.product=param
  console.log(param);
if(this.product===null){
  this.product=new Array<Product>();
}else{
  this.show=true;
}

})

  }

  open(id:string) {
    this.router.navigate(['customer', id]);
  }
  

}
