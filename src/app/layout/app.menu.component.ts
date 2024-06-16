import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Analytics Dashboard',
                        icon: 'pi pi-fw pi-chart-pie',
                        routerLink: ['/dashboard-analytics']
                    },
                    {
                        label: 'SaaS Dashboard',
                        icon: 'pi pi-fw pi-bolt',
                        routerLink: ['/dashboard-saas']
                    },
                ]
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar']
                    },
                    // {
                    //     label: 'Files',
                    //     icon: 'pi pi-fw pi-folder',
                    //     routerLink: ['/apps/files']
                    // },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/apps/tasklist']
                    }
                ]
            },

            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Projects',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['/pages/project']
                    },
                    {
                        label: 'Categories',
                        icon: 'pi pi-fw pi-tags',
                        routerLink: ['/pages/category']
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/pages/help']
                    }
                ]
            },

            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/list']
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create']
                    }
                ]
            },

        ];
    }
}
