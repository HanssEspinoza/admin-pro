import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { ApiService } from '@core/services';
import { LoginForm } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiService = inject(ApiService);

  sendLogin(loginForm: LoginForm): Observable<any> {
    return this.apiService
      .store('auth/login', loginForm)
      .pipe(catchError((error) => throwError(() => error.error.message)));
  }
}
