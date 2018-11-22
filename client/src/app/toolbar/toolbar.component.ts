import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  private _showMessage(message) {
    return this.snackBar.open(message, 'dismiss', {
      duration: 500,
    }).afterDismissed();
  }

  isLoggedIn() {
    return this._auth.isLoggedIn();
  }

  logout() {
    this._auth.logout();
    this._showMessage('Loggin out...')
      .subscribe(() => this._router.navigate(['/']));
  }

}
