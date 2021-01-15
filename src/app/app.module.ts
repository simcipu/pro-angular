import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CustomerComponent } from './customer/customer.component';
import { NewProductComponent } from './new-product/new-product.component';
import {FormsModule} from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CustomerComponent,
    NewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
