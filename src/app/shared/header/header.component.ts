import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	constructor(
		private router: Router,
		private sessionService: SessionService,
	) {}

	logOut() {
		sessionStorage.clear();
		alert('Succesfully logged  out!');
		this.router.navigate(['signin']);
	}

	isLoggedIn(): boolean {
		return this.sessionService.isLoggedIn();
	}
}
