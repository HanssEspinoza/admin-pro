import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { EyeBtnService } from '@core/services';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  private eyeBtnService = inject(EyeBtnService);
  private fb = inject(FormBuilder);

  public loginForm: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  public showPassword = computed<boolean>(this.eyeBtnService.showEye);

  public onLogin():void {
    console.log(this.loginForm.value);
  }
}
