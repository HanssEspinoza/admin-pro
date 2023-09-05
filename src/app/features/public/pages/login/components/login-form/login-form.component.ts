import { Component, signal } from '@angular/core';

import {
  IconDefinition,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public faEye = signal<IconDefinition>(faEye);
  public faEyeSlash = signal<IconDefinition>(faEyeSlash);
  public showPassword = signal<boolean>(false);
}
