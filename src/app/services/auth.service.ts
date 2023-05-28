import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public clientId = 'winted-web';
  public redirectUri = 'http://localhost:4200/test';
  public authServer = 'http://localhost:8000';
  public clientSecret = '0tWCKy4mShRYeQjw8TMMISsGQDEQJmYB';
  public realm = 'winted';

  constructor(
    private _http: HttpClient,
    private cookieService: CookieService
  ) {}

  getServerLogin() {
    return `http://localhost:8000/realms/winted/protocol/openid-connect/auth?response_type=code&client_id=${this.clientId}&redirect_uri=${this.redirectUri}`;
  }

  retrieveToken(code) {
    let params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.clientId);
    params.append('redirect_uri', this.redirectUri);
    params.append('code', code);
    params.append('client_secret', this.clientSecret);

    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    });

    this._http
      .post('http://localhost:8000/realms/winted/protocol/openid-connect/token',
        params.toString(),
        { headers: headers }
      )
      .subscribe((data) => this.saveToken(data));
  }

  saveToken(token) {
    let expireDate = new Date().getTime() + 1000 * token.expires_in;
    this.cookieService.set('access_token', token.access_token, expireDate);
    this.cookieService.set('refresh_token', token.refresh_token);
    console.log('Obtained Access token');
    window.location.href = this.redirectUri;
  }

  getResource(resourceUrl): Observable<any> {
    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + this.cookieService.get('access_token'),
    });
    return this._http.get(resourceUrl, { headers: headers });
  }

  checkCredentials() {
    return this.cookieService.check('access_token');
  }

  logout() {
    this.cookieService.delete('access_token');
    window.location.reload();
  }
}
