import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CityService {
	private cityDataUrl = 'assets/cities.json'; // Adjust the path to your JSON file

	constructor(private http: HttpClient) {}

	getCities(): Observable<string[]> {
		return this.http.get<string[]>(this.cityDataUrl);
	}
}
