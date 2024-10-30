import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../layout/main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
