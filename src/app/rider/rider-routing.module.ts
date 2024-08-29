import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiderComponent } from './rider.component';

const routes: Routes = [
  { path: '', component: RiderComponent } // Define child routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderRoutingModule { }
