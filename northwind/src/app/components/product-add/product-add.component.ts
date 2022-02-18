import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  categories:Category[]=[]
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private productService:ProductService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategories();
  }

  createProductAddForm(){
    this.productAddForm= this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required],
    })

  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{

      this.categories=response.data;

    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel= Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")

      },responseError=>{ //basarısız olduğu durum
        //burası tamamen apien gelen verileri göre yapılmalı bu örnekte;
          // bana Errors. dönüyormus donen seyin içindede bir array ve bu arrayında bir ErrorMesaagesi varmıs
        console.log(responseError)
        if(responseError.error.Errors){
          if(responseError.error.Errors.length>0){
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")


            }
          }

        }else{
          if(responseError.error.StatusCode){
            this.toastrService.error("İzinsiz işlem yaptınız","Dikkat")
          }else{
            this.toastrService.error(responseError.error.message,"Dikkat")
          }

        }

      })

    }else{
      this.toastrService.warning("Form eksik","Dikkat")
    }

  }

}
