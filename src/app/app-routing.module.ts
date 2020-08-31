import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NotAuthorizedComponent } from '@shared/components/not-authorized/not-authorized.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';

import { RoleBaseGuard } from '@core/guards/role-base.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [RoleBaseGuard],
    data: { expectedRole: 'user' },
    children: [
      {
        path: '',
        redirectTo: '/goals',
        pathMatch: 'full',
      },
      {
        path: 'goals',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
         path: 'notifications',
         loadChildren: () =>
           import('./notifications/notifications.module').then(
             (m) => m.NotificationsModule
           ),
      },
      {
        path: 'account/settings',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule)
      }
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [RoleBaseGuard],
    data: { expectedRole: 'admin' },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
