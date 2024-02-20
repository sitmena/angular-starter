import {Routes} from '@angular/router';
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    title: "Dashboard",
    path: "",
    loadComponent: () => import('./components/dashboard/dashboard.component').then(comp => comp.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    title: "Dashboard",
    path: "dashboard",
    loadComponent: () => import('./components/dashboard/dashboard.component').then(comp => comp.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    title: "Profile",
    path: "profile",
    loadComponent: () => import('./components/profile/profile.component').then(comp => comp.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    title: "Login",
    path: "login",
    loadComponent: () => import('./components/login/login.component').then(comp => comp.LoginComponent),
  }
];
