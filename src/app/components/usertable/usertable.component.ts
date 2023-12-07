import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';
@Component({
	selector: 'app-usertable',
	templateUrl: './usertable.component.html',
	styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent implements OnInit {
	users: User[] = [];
	searchUser = '';

	constructor(private userService: AuthService) {}

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers(): void {
		this.userService.getUsers().subscribe((users) => (this.users = users));
	}

	deleteUser(user: User): void {
		if (confirm('Are you sure you want to delete this user?')) {
			this.users = this.users.filter((h) => h !== user);
			this.userService.deleteUser(user.id).subscribe();
		}
	}
}
