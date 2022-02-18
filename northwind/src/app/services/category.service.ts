import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44335/api/categories/getall"

  constructor(private httpClient:HttpClient) { }
  //Observable: sen subsricbe olunabilir bir ProductResponseModel sin anlamına geliyor
  getCategories(): Observable<ListResponseModel<Category>> {
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
