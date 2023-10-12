import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from '@core/services';

@Component({
  selector: 'shared-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styles: [
    `
      .my-spinner {
        background-color: rgba(0, 0, 0, 0.5);
      }
    `,
  ],
})
export class SpinnerComponent {
  private spinnerService = inject(SpinnerService);

  public finishedSpinnerCheck = computed(() => {
    return this.spinnerService.isLoading()
  })
}
