import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styles: [
    `
      .login-box {
        right: 0px;
        position: absolute;
        height: 100%;
        width: 400px;
        margin: 0 auto;
      }
    `,
  ],
})
export class LoginComponent {}
