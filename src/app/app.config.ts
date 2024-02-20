import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {PermissionsService} from "./guards/auth.guard";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), PermissionsService]
};
