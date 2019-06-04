import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ComplaintComponent } from './complaint.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComplaintComponent, AddComplaintComponent],
  imports: [
    CommonModule,
    AppModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
  ]
})
export class ComplaintModule { }
