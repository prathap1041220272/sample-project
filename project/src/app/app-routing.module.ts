import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { CanActiveService } from './services/auth-guard/can-active.service';

const routes : Routes = [
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login' ,component: LoginComponent},
{path:'signup',component:SignupComponent},
{path:'logout',component:LogoutComponent},
{path:'books',component:NewComponentComponent, canActivate: [CanActiveService]},
{path:'**',redirectTo:'/login',pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
   exports: [
  RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
