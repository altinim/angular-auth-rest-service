import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/auth';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl = 'http://localhost:3000/user';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	};

	constructor(private http: HttpClient) {}
	private log(message: string) {
		console.log(`UserService: ${message}`);
	}

	registerUser(User: User): Observable<User> {
		return this.http.post<User>(this.baseUrl, User, this.httpOptions).pipe(
			tap((newUser: User) => this.log(`added User w/ id=${newUser.id}`)),
			catchError(this.handleError<User>('addUser')),
		);
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.baseUrl).pipe(
			tap((_) => this.log('fetched Useres')),
			catchError(this.handleError<User[]>('getUseres', [])),
		);
	}

	getUserByEmail(email: string): Observable<User[]> {
		return this.http.get<User[]>(`${this.baseUrl}/?email=${email}`);
	}

	/** GET user by id. Will 404 if id not found */
	getUserById(id: number): Observable<User> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<User>(url).pipe(
			tap((_) => this.log(`fetched User id=${id}`)),
			catchError(this.handleError<User>(`getUser id=${id}`)),
		);
	}

	/** DELETE: delete the user from the server */
	deleteUser(id: number): Observable<User> {
		const url = `${this.baseUrl}/${id}`;

		return this.http.delete<User>(url, this.httpOptions).pipe(
			tap((_) => this.log(`deleted user id=${id}`)),
			catchError(this.handleError<User>('deleteUser')),
		);
	}

	/** PUT: update the user on the server */
	updateUser(user: User): Observable<any> {
		const url = `${this.baseUrl}/${user.id}`;
		return this.http.put(url, user, this.httpOptions).pipe(
			tap((_) => this.log(`updated user id=${user.id}`)),
			catchError(this.handleError<any>('updateUser')),
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);

			this.log(`${operation} failed: ${error.message}`);

			return of(result as T);
		};
	}
}
