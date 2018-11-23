import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { AuthGuard } from './auth.guard';
// Components
import { AuthComponent } from './components/auth/auth.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
