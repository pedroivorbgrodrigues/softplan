import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import ContactModel from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _contactsUrl = `${environment.apiUrl}/contacts`;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this._contactsUrl);
  }

  newContact(contact: ContactModel) {
    return this.http.post<any>(this._contactsUrl, contact);
  }

  updateContact(contact: ContactModel) {
    return this.http.put<any>(this._contactsUrl, contact);
  }

  deleteContact(contactId: string) {
    return this.http.delete<any>(`${this._contactsUrl}/${contactId}`);
  }
}
