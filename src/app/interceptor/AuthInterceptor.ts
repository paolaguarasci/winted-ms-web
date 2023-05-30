import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, throwError } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const token = this.cookieService.get('access_token');
    const refreshToken = this.cookieService.get('refresh_token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && this.cookieService.get('access_token') !== "") {
          this.cookieService.delete('access_token');
          this.cookieService.delete('refresh_token');
          location.reload();
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}
