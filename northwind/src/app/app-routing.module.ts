import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
  //rootlarını buraya tanımla
  {path:"", pathMatch:"full", component:ProductComponent},//ana sayfam
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},// sana böyle bir sey göndericem burdakı "categoryId" al ve ilgili componenti değiştir
  {path:"product/add",component:ProductAddComponent,canActivate:[LoginGuard]},// sana böyle bir sey göndericem burdakı "categoryId" al ve ilgili componenti değiştir
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
