import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session/session.service';

export const authGuard: CanActivateFn = (route, state) => {
	if (sessionStorage.getItem('email')) {
		return true;
	} else {
		const router = inject(Router);
		return router.navigate(['signin']);
	}
};
