import { Component, Input } from '@angular/core';
import { User } from '../../interface/auth';

@Component({
	selector: 'app-user',
	template: `
		<td class="w-4 p-4"></td>
		<th
			scope="row"
			class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
		>
			{{ user.firstName }} {{ user.lastName }}
		</th>
		<td class="px-6 py-4">{{ user.email }}</td>
		<td class="px-6 py-4">{{ '*'.repeat(user.password.length) }}</td>
		<td class="px-6 py-4">Canada</td>
		<td class="px-6 py-4">
			<a
				href="#"
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>Edit</a
			>
		</td>
	`,
})
export class UserComponent {
	@Input() user!: User;
}
