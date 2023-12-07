import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/auth';
import { CityService } from 'src/app/services/cities/city.service';
@Component({
	selector: 'app-update-user',
	templateUrl: './update-user.component.html',
	styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
	user: User | undefined;
	cities: string[] = [];
	constructor(
		private location: Location,
		private authService: AuthService,
		private route: ActivatedRoute,
		private cityService: CityService,
	) {}

	ngOnInit(): void {
		this.getUser();
		this.fetchCities();
	}

	fetchCities() {
		this.cityService.getCities().subscribe((cities) => {
			this.cities = cities;
		});
	}
	getUser(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.authService
			.getUserById(id)
			.subscribe((user) => (this.user = user));
	}

	goBack(): void {
		this.location.back();
	}
	save(): void {
		if (this.user) {
			this.authService
				.updateUser(this.user)
				.subscribe(() => this.goBack());
		}
	}
}
