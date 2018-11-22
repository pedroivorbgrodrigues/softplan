import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) { }

  loginWithCode(code) {
    return this.http.post<any>(`${this._authUrl}/login`, code);
  }

  registerCode(code) {
    return this.http.post<any>(`${this._authUrl}/register`, code);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
