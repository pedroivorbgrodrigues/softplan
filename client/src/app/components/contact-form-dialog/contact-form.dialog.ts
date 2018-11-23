import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ContactModel from '../../models/contact.model';

export interface DialogData {
  title: string;
  submitText: string;
  contact: ContactModel;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.dialog.html',
  styleUrls: ['./contact-form.dialog.scss']
})
export class ContactFormDialogComponent  implements OnInit {
  form: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ContactFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  ngOnInit() {
    const { contact } = this.data;
    this.form = this._formBuilder.group({
      _id: [contact._id],
      name: [contact.name, Validators.required],
      phone: [contact.phone, [Validators.required, Validators.minLength(11)]],
      email: [contact.email, Validators.email],
      company: [contact.company],
      job: [contact.job]
    });
  }

  save() {
    const model = ContactModel.fromDatabaseModel(this.form.value);
    this.form.reset();
    this.dialogRef.close(model);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
