import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from '../keycloak/keycloak.service';

export const authGuard: CanActivateFn = (route, state) => {
  const keycloakService: KeycloakService = inject(KeycloakService);
  const router: Router = inject(Router);

  if (!keycloakService.keycloak?.authenticated || keycloakService.keycloak?.isTokenExpired()) {
    keycloakService.logout();
    return false;
  }

  return true;
};
