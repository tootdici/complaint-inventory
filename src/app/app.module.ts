import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComplaintService } from './complaint/complaint.service';
import { HeaderComponent } from './shared/header/header.component';
import { AddComplaintComponent } from './complaint/add-complaint/add-complaint.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    AddComplaintComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AngularFirestoreModule, ComplaintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
