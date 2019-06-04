import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComplaintService } from './complaint/complaint.service';

@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule
  ],
  providers: [AngularFirestoreModule, ComplaintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
