import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];
  dataLoaded=false;
  //secili kategori için
  currentCategory:Category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  //kategorileri getirme
  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{

      this.categories=response.data;
      this.dataLoaded=true;
    })
  }

  //click operasyonu için tıklanan cateogrnın bilgilerini alma
  setCurrentCategory(category:Category){
      this.currentCategory=category;
  }

  // secili categornin classını değiştirme
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return  "list-group-item active";
    }else{
      return "list-group-item"
    }
  }

  //tüm ürünler <li></li> için
  getAllCategoryClass(){
    if(!this.currentCategory){
      return  "list-group-item active";
    }else{
      return "list-group-item"
    }
  }



}
