import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Color, Size } from '@core/models';

@Component({
  selector: 'shared-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input()
  public type: 'button' | 'submit' | 'reset' = 'button';
  @Input()
  public color: Color = 'primary';
  @Input()
  public outline = false;
  @Input()
  public btnDisabled = false;
  @Input()
  public size:Size = 'md';

  get colors() {
    return {
      [`btn-${this.color}`]: true,
      [`btn-${this.size}`]: true,
      'btn-outline': this.outline,
      'btn-disabled': this.btnDisabled,
    };
  }
}
