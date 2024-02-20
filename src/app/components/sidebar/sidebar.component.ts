import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Pages} from "../../enums/pages";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

    protected readonly Pages = Pages;
}
