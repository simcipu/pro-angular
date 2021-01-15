import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import {NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CercaProductComponent } from './cerca-product/cerca-product.component';



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
  },
  {
   
    path: 'update/product/:serialNumber',
    component: UpdateProductComponent
  },
  {
   
    path: 'cerca',
    component: CercaProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
