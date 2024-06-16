import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'empty', data: { breadcrumb: 'Empty' }, loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'faq', data: { breadcrumb: 'FAQ' }, loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
        { path: 'help', data: { breadcrumb: 'Help' }, loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
        { path: 'project', data: { breadcrumb: 'Project' }, loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
        { path: 'category', data: { breadcrumb: 'Category' }, loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
