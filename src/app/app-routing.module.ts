import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { authGuard } from './services/guard/auth.guard';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./demo/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
            { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
            { path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./demo/components/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'apps', data: { breadcrumb: 'Apps' }, loadChildren: () => import('./demo/components/apps/apps.module').then(m => m.AppsModule) }
        ],
        canActivate: [authGuard]
    },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
