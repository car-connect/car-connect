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
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { LocationComponent } from './components/location/location.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ConstructionComponent } from './components/construction/construction.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
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
  {path:'location',component:LocationComponent},
  {path:"products/:category",component:ProductsComponent},
  {path:'product/:id',component:SingleproductComponent},
  {path:"placeorder", component:PlaceOrderComponent},
  {path:"ordersuccess",component:OrdersuccessComponent},
  {path:'contactus',component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"privacy",component:PrivacyComponent},
  {path:"purchase",component:PurchaseComponent},
  {path:'construction',component:ConstructionComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"adminhome",
  canActivate:[AdminGuardGuard],
  component:AdminHomeComponent},
  {path:"adminhome/addproduct",
  canActivate:[AdminGuardGuard],component:AdminaddproductComponent},
  {path:"adminhome/addproduct/:product",
  canActivate:[AdminGuardGuard],component:AdminaddproductComponent},
  {path:"adminhome/manageproduct",
  canActivate:[AdminGuardGuard], component:AdminmanageproductComponent},
  {path:"adminhome/editproduct",
  canActivate:[AdminGuardGuard],component:ModalsComponent},
  {path:"adminhome/manageuser",
  canActivate:[AdminGuardGuard],component:AdminmanageuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
