import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  { path: 'complaint', component: ComplaintComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}