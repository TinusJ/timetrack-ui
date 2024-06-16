import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { KeycloakService } from './services/keycloak/keycloak.service';
import { UserService } from './services/model-services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig, private keycloakService: KeycloakService,
        private userService: UserService) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;


        // this.keycloakService.getUserProfile().then((profile) => {
        //     this.userService.createUser({'email':profile.email}).subscribe(
        //         (response) => {
        //             console.log('User created successfully:', response);
        //         },
        //         (error) => {
        //             console.error('Error creating user:', error);
        //         }
        //     );
        // });
    }
}
