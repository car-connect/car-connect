import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminaddproductComponent } from './adminaddproduct/adminaddproduct.component';
import { AdminmanageproductComponent } from './adminmanageproduct/adminmanageproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';
import { SignupComponent } from './signup/signup.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:'',canActivate:[UserGuard],component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"signupauth",component:SignupAuthComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"adminhome",
  canActivate:[AdminGuardGuard],
  component:AdminHomeComponent},
  {path:"adminhome/addproduct",component:AdminaddproductComponent},
  {path:"adminhome/manageproduct", component:AdminmanageproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
