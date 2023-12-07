import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFormComponent } from './shared/auth-form/auth-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { UsertableComponent } from './components/usertable/usertable.component';
import { UserComponent } from './components/user/user.component';
import { NgArrayPipesModule } from 'ngx-pipes';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SignupComponent,
		DashboardComponent,
		AuthFormComponent,
		PageNotFoundComponent,
		HeaderComponent,
		UsertableComponent,
		UserComponent,
		UpdateUserComponent,
  HomeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgArrayPipesModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
