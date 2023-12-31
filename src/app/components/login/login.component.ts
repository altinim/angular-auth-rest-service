import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
 export class LoginComponent {
	loginForm = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required],
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
	) {}

	get email() {
		return this.loginForm.controls['email'];
	}

	loginUser() {
		const { email, password } = this.loginForm.value;
		this.authService.getUserByEmail(email as string).subscribe(
			(response) => {
				if (response.length > 0 && response[0].password === password) {
					sessionStorage.setItem('email', email as string);
					alert('Succesfully logged in.');
					this.router.navigate(['/dashboard']);
				} else {
					alert('Wrong credentials.');
				}
			},
			(error) => {
				console.log('error');
			},
		);
	}
}
