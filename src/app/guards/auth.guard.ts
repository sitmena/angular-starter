import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject, Injectable} from "@angular/core";

@Injectable()
export class PermissionsService {

  canActivate(): boolean | UrlTree {
    return true;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
