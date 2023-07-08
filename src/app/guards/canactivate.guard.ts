import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const canactivateGuard: CanActivateFn = (route, state) => {
  console.log('ciao sono nella canactivateGuard');

  const router = inject(Router);
  const service = inject(AuthService);

  if (service.checkCredentials()) {
    return true;
  }
  // return router.createUrlTree(['/']);

  // not logged in so redirect to login page with the return url
  router.navigate(['login'], {
    queryParams: { redirectUrl: "https://localhost:4200" + state.url },
  });
  return false;
};
