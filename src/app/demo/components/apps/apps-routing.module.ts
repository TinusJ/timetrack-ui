import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'calendar', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./calendar/calendar.app.module').then(m => m.CalendarAppModule) },
        { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
        { path: 'chat', data: { breadcrumb: 'Chat' }, loadChildren: () => import('./chat/chat.app.module').then(m => m.ChatAppModule) },
        { path: 'files', data: { breadcrumb: 'Files' }, loadChildren: () => import('./file/file.app.module').then(m => m.FileAppModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
