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
  private urlsave = 'http://localhost:8080/mongo/save';
  private urlupdate = 'http://localhost:8080/mongo/update';
  private urltype = 'http://localhost:8080/mongo/get/type';
  private urlsurname = 'http://localhost:8080/mongo/surname';
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

  public save(product:Product): Observable<boolean>{

    return this.http.put<boolean>(this.urlsave,product);
  }

  public update(product:Product): Observable<boolean>{

    return this.http.post<boolean>(this.urlupdate,product);
  }


  public getForType(type:string): Observable<Product[]> 
  {
 
    return this.http.get<Product[]>(this.urltype+'/'+type);
  }
  public getForSurname(surname:string): Observable<Product[]> 
  {
 
    return this.http.get<Product[]>(this.urlsurname+'/'+surname);
  }
}
