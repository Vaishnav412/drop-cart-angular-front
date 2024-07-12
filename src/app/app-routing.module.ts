import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllViewComponent } from './all-view/all-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"user/login",component:LoginComponent},
  {path:"user/home",component:AllViewComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"product/view/:id",component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
