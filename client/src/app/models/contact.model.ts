export default class ContactModel {
  _id: string;
  name: string;
  phone: number;
  email: string;
  company: string;
  job: string;

  constructor(id?: string, name?: string, phone?: number, email?: string, company?: string, job?: string) {
    this._id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.company = company;
    this.job = job;
  }

  static fromDatabaseModel(model) {
    return new ContactModel(model._id, model.name, model.phone, model.email, model.company, model.job);
  }

  toString() {
    return `${this.name} - ${this.phone}`;
  }
}
