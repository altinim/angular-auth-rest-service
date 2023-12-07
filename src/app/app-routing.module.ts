import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'signin', pathMatch: 'full' },
	{ path: 'signin', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'update-user', component: UpdateUserComponent },
	{ path: 'update-user/:id', component: UpdateUserComponent },
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [authGuard],
	},
	{ path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
