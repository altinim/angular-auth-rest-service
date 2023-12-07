import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';
import { CityService } from 'src/app/services/cities/city.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	cities: string[] = [];
	selectedCity: string = '';
	registerForm = this.fb.group(
		{
			firstName: [
				'',
				[
					Validators.required,
					Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/),
				],
			],
			lastName: [
				'',
				[
					Validators.required,
					Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/),
				],
			],
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required],
			city: ['', Validators.required],
		},
		{
			validators: passwordMatchValidator,
		},
	);

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private cityService: CityService,
	) {
		this.fetchCities();
	}

	fetchCities() {
		this.cityService.getCities().subscribe((cities) => {
			this.cities = cities;
		});
	}
	get firstName() {
		return this.registerForm.controls['firstName'];
	}

	get lastName() {
		return this.registerForm.controls['lastName'];
	}

	get email() {
		return this.registerForm.controls['email'];
	}

	get password() {
		return this.registerForm.controls['password'];
	}

	get confirmPassword() {
		return this.registerForm.controls['confirmPassword'];
	}
	get city() {
		return this.registerForm.controls['city'];
	}

	submitDetails() {
		const postData = { ...this.registerForm.value };
		delete postData.confirmPassword;

		this.authService.registerUser(postData as User).subscribe({
			next: (response) => {
				console.log(response);
				alert('Succesfully registered.');
				this.router.navigate(['signin']);
			},
			error: (error) => {
				throw new Error('Failed subscribtion to register data.');
			},
		});
	}
}
