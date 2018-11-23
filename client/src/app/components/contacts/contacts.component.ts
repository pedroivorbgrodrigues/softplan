import { Observable } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import ContactModel from '../../models/contact.model';
import { ContactFormDialogComponent } from '../contact-form-dialog/contact-form.dialog';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: ContactModel[] = [];
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private _contacts: ContactService) { }

  ngOnInit() {
    this._getAllContacts();
  }

  private _getAllContacts() {
    this._contacts.getAll()
      .subscribe(response => {
        this.contacts = response.payload.map(contact => ContactModel.fromDatabaseModel(contact));
      }, response => this._showMessage(response.error.message));
  }

  private _showMessage(message, autoDismiss = false) {
    const options = autoDismiss ? { duration: 2000 } : null;
    return this.snackBar.open(message, 'dismiss', options).afterDismissed();
  }

  private _handleSuccess(response) {
    this._showMessage(response.message, true);
    this._getAllContacts();
  }

  createDialog(): void {
    this._openDialog({title: 'Novo Contato', submitText: 'CADASTRAR', contact: new ContactModel()})
      .subscribe(contact => {
        if (!contact) {
          return;
        }
        this._contacts.newContact(contact)// didnt know how to chain these properly, maybe flatmap?
          .subscribe(this._handleSuccess.bind(this), response => this._showMessage(response.error.message));
      }, response => this._showMessage(response.error.message));
  }

  editDialog(contact): void {
    this._openDialog({title: 'Editar Contato', submitText: 'ATUALIZAR', contact})
      .subscribe(updatedContact => {
        if (!updatedContact) {
          return;
        }
        this._contacts.updateContact(updatedContact)
          .subscribe(this._handleSuccess.bind(this), response => this._showMessage(response.error.message));
      }, response => this._showMessage(response.error.message));
  }

  delete(contactId): void {
    this._contacts.deleteContact(contactId)
      .subscribe(this._handleSuccess.bind(this), response => this._showMessage(response.error.message));
  }

  private _openDialog(data): Observable<any> {
    const dialogRef = this.dialog.open(ContactFormDialogComponent, {data});

    return dialogRef.afterClosed();
  }

}
