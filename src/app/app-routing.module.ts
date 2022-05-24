import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoggedInAuthGuard } from './shared/guard/logged-in-auth.guard';

const routes: Routes = [ 
  { path: '', redirectTo: '/sign-in', pathMatch: 'full', },
  { path: 'sign-in', component: SignInComponent, canActivate: [LoggedInAuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '**', redirectTo: '/sign-in', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false, scrollPositionRestoration: 'enabled' }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
