import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
