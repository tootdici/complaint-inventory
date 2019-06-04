import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes = [
  { path: '', redirectTo: '/complaint', pathMatch: 'full' },
  { path: 'complaint', component: ComplaintComponent}
 ];
  
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}