import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent {
  @Input() formTitle: string = '';
  @Input() buttonLabel: string = '';
  @Input() isBeingRegisted: boolean = false; // Add this property
}
