import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { UserPictureComponent } from './components/user-picture/user-picture.component';


const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: UserInfoComponent
      },
      {
        path: 'password',
        component: UserPasswordComponent
      },
      {
        path: 'picture',
        component: UserPictureComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
