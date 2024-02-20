import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {PermissionsService} from "./guards/auth.guard";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-starter';

  constructor(public _permissionService: PermissionsService) {
  }
}
