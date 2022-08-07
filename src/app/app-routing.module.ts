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
