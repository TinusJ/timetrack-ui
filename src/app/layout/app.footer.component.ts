import {Component} from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {

    environmentName: string = environment.production ? 'Production' : 'Development';
    environment:string = environment.keycloak.url;

    constructor(public layoutService: LayoutService) {}
}
