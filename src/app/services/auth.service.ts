import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public clientId = 'winted-web';
  public redirectUri = 'https://localhost:4200/login';
  public redirectAftherUri = 'https://localhost:4200/';
  public authServer = 'https://localhost:4200/';
  public clientSecret = '0tWCKy4mShRYeQjw8TMMISsGQDEQJmYB';
  public realm = 'winted';

  constructor(
    private _http: HttpClient,
    private cookieService: CookieService,
    // private keycloak: KeycloakService
  ) {}

  getServerLogin(url) {
    // let reurl = this.redirectUri + url;
    let reurl = this.redirectUri;
    return `https://localhost:4200/realms/winted/protocol/openid-connect/auth?response_type=code&client_id=${this.clientId}&redirect_uri=${reurl}`;
  }

  retrieveToken(code, url) {
    let params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.clientId);
    // params.append('redirect_uri', "https://localhost:4200/login?redirectUrl=" + url);
    params.append('redirect_uri', "https://localhost:4200/login");
    params.append('code', code);
    params.append('client_secret', this.clientSecret);

    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    });
    console.log("Retrive token")
    return this._http
      .post(
        'https://localhost:4200/realms/winted/protocol/openid-connect/token',
        params.toString(),
        { headers: headers }
      );
  }

  saveToken(token) {
    let expireDate = new Date().getTime() + 1000 * token.expires_in;
    this.cookieService.set('access_token', token.access_token, expireDate);
    this.cookieService.set('refresh_token', token.refresh_token);
    console.log('Obtained Access token');
    window.location.href = this.redirectUri;
  }

  // async checkCredentials() {
  //   return await this.keycloak.isLoggedIn();
  // }

  checkCredentials() {
    return this.cookieService.check('access_token');
  }

  logout() {
    this.cookieService.delete('access_token');
    window.location.reload();
  }

  refreshToken(refreshData: any): Observable<any> {
    // this.cookieService.delete('access_token');
    // this.cookieService.delete('refresh_token');
    // const body = new HttpParams()
    //   .set('refresh_token', refreshData.refresh_token)
    //   .set('grant_type', 'refresh_token');
    // return this._http.post<any>(this.authServer + 'oauth/token', body).pipe(
    //   map((res) => {
    //     this.saveToken(res);
    //   })
    // );

    let params = new URLSearchParams();
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', this.cookieService.get('refresh_token'));

    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    });

    return this._http
      .post<any>(
        'https://localhost:4200/realms/winted/protocol/openid-connect/token',
        params.toString(),
        { headers: headers }
      )
      .pipe(
        map((res) => {
          this.saveToken(res);
        })
      );
  }
}
