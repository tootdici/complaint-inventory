import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ComplaintComponent } from './complaint/complaint.component';

@NgModule({
  declarations: [ComplaintComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class ComplaintModule { }
