import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('email');
  }
}
