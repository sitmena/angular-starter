import {Component} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = ''
  password: string = ''

  constructor(private _router: Router) {
  }

  login() {
    localStorage.setItem("isLoggedIn", "true");
    this._router.navigate(['/'], )
  }
}
