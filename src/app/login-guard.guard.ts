import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './session/session.service';

export const loginGuardGuard: CanActivateFn = () => {
  const sessionService = inject (SessionService);;
  return sessionService.isAuthenticated()
};
