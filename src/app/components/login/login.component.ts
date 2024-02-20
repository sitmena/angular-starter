import {Component, OnInit} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {Route, Router} from "@angular/router";
import {PermissionsService} from "../../guards/auth.guard";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''

  constructor(private _router: Router, private _permissionService: PermissionsService) {
  }

  ngOnInit(): void {
    if (this._permissionService.isLoggedIn()) {
      this._router.navigate(['/'],)
    }
  }

  login() {
    localStorage.setItem("isLoggedIn", "true");
    this._router.navigate(['/'],)
  }
}
