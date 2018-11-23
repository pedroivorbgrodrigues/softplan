import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactFormDialogComponent } from './components/contact-form-dialog/contact-form.dialog';
// Services
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
// Routes & Guards
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ContactsComponent,
    ToolbarComponent,
    ContactFormDialogComponent,
  ],
  entryComponents: [
    ContactFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    AuthService,
    ContactService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
