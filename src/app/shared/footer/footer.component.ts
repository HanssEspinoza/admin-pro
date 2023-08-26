import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  public year = signal<number>(new Date().getFullYear());
}
