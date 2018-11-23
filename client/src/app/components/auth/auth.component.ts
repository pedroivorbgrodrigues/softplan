import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
// services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formData = {code: ''};
  constructor(public snackBar: MatSnackBar, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  private _storeToken(token) {
    localStorage.setItem('token', token);
  }

  private _showMessage(message) {
    return this.snackBar.open(message, 'dismiss', {
      duration: 500,
    }).afterDismissed();
  }

  private _handleSuccess(response) {
    this._storeToken(response.token);
    this._showMessage(response.message)
      .subscribe(() => this._router.navigate(['/contacts']));
  }

  registerCode() {
    this._auth.registerCode(this.formData)
      .subscribe(this._handleSuccess.bind(this), response => this._showMessage(response.error.message));
  }

  loginWithCode() {
    this._auth.loginWithCode(this.formData)
      .subscribe(this._handleSuccess.bind(this), response => this._showMessage(response.error.message));
  }

}
