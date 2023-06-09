import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';

export const canactivateGuard: CanActivateFn = (route, state) => {
  console.log("ciao sono nella canactivateGuard")

  const router = inject(Router);
  const service = inject(AuthService)

  if (service.checkCredentials()) {
    return true;
  }
  return router.createUrlTree(['/']);
};
