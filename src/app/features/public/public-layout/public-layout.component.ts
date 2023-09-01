import { Component } from '@angular/core';

@Component({
  selector: 'public-layout',
  templateUrl: './public-layout.component.html',
  styles: [
    `
      .login-register {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100%;
        width: 100%;
        padding: 10% 0;
        position: fixed;
      }
      .login-sidebar {
        padding: 0px;
        margin-top: 0px;
      }
    `,
  ],
})
export class PublicLayoutComponent {}
