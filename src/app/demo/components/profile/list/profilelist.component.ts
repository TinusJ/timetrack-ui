import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { User } from 'src/app/demo/api/user';

@Component({
    templateUrl: './profilelist.component.html'
})
export class ProfileListComponent implements OnInit {

    users: User[] = [];

    constructor(private router: Router) { }

    ngOnInit() {

    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }

    navigateToCreateUser() {
        this.router.navigate(['profile/create'])
    }

}