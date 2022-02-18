import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44335/api/"

  constructor(private httpClient:HttpClient) { }
  //Observable: sen subsricbe olunabilir bir ProductResponseModel sin anlamına geliyor
  getProducts(): Observable<ListResponseModel<Product>> {
   let newPath=this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getlistbycategory?categoryId="+categoryId;

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
   }

   add(product:Product):Observable<ResponseModel>{

    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product);
   }
}
