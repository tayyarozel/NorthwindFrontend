import { Product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  CartItems:CartItem[]=[];

  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.CartItems=this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removerFromCart(product);
    this.toastrService.error("Silindi",product.productName+" sepetten silindi")

  }

}
