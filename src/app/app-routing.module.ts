import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';
import { AdminmanageproductComponent } from './components/adminmanageproduct/adminmanageproduct.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupAuthComponent } from './components/signup-auth/signup-auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserGuard } from './guards/user.guard';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductsComponent } from './components/products/products.component';
import { ModalsComponent } from './components/modals/modals.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { AdminmanageuserComponent } from './components/adminmanageuser/adminmanageuser.component';


const routes: Routes = [
  {path:'',canActivate:[UserGuard],component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"signupauth",component:SignupAuthComponent},
  {path:"profile",component:UserProfileComponent,
  children:[
    {path:"orders",component:OrdersComponent},
    {path:"wishlist",component:WishlistComponent},
    {path:"editprofile",component:EditprofileComponent},
  ]},
  {path:'cart',component:CartComponent},
  {path:"products/:category",component:ProductsComponent},
  {path:"placeorder", component:PlaceOrderComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"adminhome",
  canActivate:[AdminGuardGuard],
  component:AdminHomeComponent},
  {path:"adminhome/addproduct",component:AdminaddproductComponent},
  {path:"adminhome/manageproduct", component:AdminmanageproductComponent},
  {path:"adminhome/editproduct",component:ModalsComponent},
  {path:"adminhome/manageuser",component:AdminmanageuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
