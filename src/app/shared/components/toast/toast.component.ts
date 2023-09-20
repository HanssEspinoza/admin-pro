import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToastService } from '@core/services';
import { BtnCircleComponent } from '../btn-circle';

@Component({
  selector: 'shared-toast',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, BtnCircleComponent],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  private toastService = inject(ToastService);

  public isActive$ = computed(() => this.toastService.isActive$());
  public toastConfig$ = computed(() => this.toastService.toastConfig$());
  public fadeOut = signal<string>('')

  closeToast(): void{
    this.fadeOut.set('animate__animated fadeOut');
    this.toastService.hide();
  }
}