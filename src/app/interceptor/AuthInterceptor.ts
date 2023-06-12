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
import {
  BehaviorSubject,
  catchError,
  filter,
  map,
  switchMap,
  take,
  throwError,
} from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

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
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (
          error.status === 401 &&
          this.cookieService.get('access_token') !== ''
        ) {
          // this.cookieService.delete('access_token');
          // this.cookieService.delete('refresh_token');
          // // location.reload();
          // location.replace("/")
          return this.handle401Error(request, next);
        }
        return throwError(() => new Error(error.message));
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = this.cookieService.get('refresh_token');

      if (token)
        return this.authService.refreshToken(token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;

            this.cookieService.set('access_token', token.accessToken);
            this.refreshTokenSubject.next(token.accessToken);

            return next.handle(this.addTokenHeader(request, token.accessToken));
          }),
          catchError((err) => {
            this.isRefreshing = false;

            // this.tokenService.signOut();

            // this.cookieService.delete('access_token');
            // this.cookieService.delete('refresh_token');
            // // location.reload();
            // location.replace("/")

            return throwError(err);
          })
        );
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
    });
  }
}
