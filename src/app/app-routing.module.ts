import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import {NewProductComponent } from './new-product/new-product.component';



const routes: Routes = [


  {
    path: 'product',
    component: ProductComponent
  },  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },{
   
    path: 'customer/:serialNumber',
    component: CustomerComponent
  },{
   
    path: 'product/add',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
