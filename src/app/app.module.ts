import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactNamePipe } from './pipes/contact-name.pipe';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactService } from './services/contactservice';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ContactNamePipe,
    LifecycleComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    // { provide: ContactService, useClass: ContactService } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
