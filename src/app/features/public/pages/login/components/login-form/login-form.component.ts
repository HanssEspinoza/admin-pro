import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styles: [
    `
      .footer {
        width: 100%;
        left: 0px;
        right: 0px;
      }
      .social {
        display: block;
        margin-bottom: 30px;
      }
      #recoverform {
        display: none;
      }
    `,
  ],
})
export class LoginFormComponent {}
