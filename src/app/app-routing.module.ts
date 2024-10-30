import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/reset', component: ResetPasswordComponent },
  { path: 'main', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
