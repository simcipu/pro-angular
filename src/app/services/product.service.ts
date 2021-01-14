import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../classes/Product";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/mongo/all';
  private urlId = 'http://localhost:8080/mongo/get/id';
  private deleteurlId = 'http://localhost:8080/mongo/delete';
  prodotto:Product[]=[];
  constructor(private http: HttpClient) { }

  public getProduct(): Observable<Product[]> 
  {
 
    return this.http.get<Product[]>(this.url);
  }

  public getProductById(id:string): Observable<Product> 
  {
 
    return this.http.get<Product>(this.urlId+'/'+id);
  }

  public deleteById(id:string): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteurlId+'/'+id);
  }
}