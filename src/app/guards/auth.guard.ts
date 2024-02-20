import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject, Injectable} from "@angular/core";

@Injectable()
export class PermissionsService {

  isLoggedIn: boolean = localStorage.getItem("isLoggedIn") === 'true'

  canActivate(): boolean | UrlTree {
    if (localStorage.getItem("isLoggedIn") === 'true') {
      return true;
    }

    return inject(Router).createUrlTree(['/login'])
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
