import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminmanageproductComponent } from './components/adminmanageproduct/adminmanageproduct.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './authconfig.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';
import { SignupAuthComponent } from './components/signup-auth/signup-auth.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ModalsComponent } from './components/modals/modals.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { Error404Component } from './components/error404/error404.component';
import { AdminmanageuserComponent } from './components/adminmanageuser/adminmanageuser.component';
import { LocationComponent } from './components/location/location.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    SignupAuthComponent,
    AdminaddproductComponent,
    AdminmanageproductComponent,
    PlaceOrderComponent,
    ProductsComponent,
    CartComponent,
    ModalsComponent,
    UserProfileComponent,
    OrdersComponent,
    WishlistComponent,
    EditprofileComponent,
    Error404Component,
    AdminmanageuserComponent,
    LocationComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
