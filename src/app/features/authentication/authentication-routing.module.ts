import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AuthenticationComponent } from './authentication.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPasswordFormComponent } from './forget-password-form/forget-password-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [

  {
    path: "",
    component: AuthenticationComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "forgotPassword/:token",
        component: ForgetPasswordComponent
      },
      {
        path: "forgotPassword",
        component: ForgetPasswordFormComponent
      },
      {
        path: "changePassword/:payload",
        component: ChangePasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
