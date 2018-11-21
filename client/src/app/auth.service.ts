import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  loginWithCode(code) {
    return this.http.post<any>(`${this._apiUrl}/login`, code);
  }

  registerCode(code) {
    return this.http.post<any>(`${this._apiUrl}/register`, code);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
