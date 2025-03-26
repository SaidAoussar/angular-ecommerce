import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: ":id",
    component: ProductDetailComponent
  },
];
