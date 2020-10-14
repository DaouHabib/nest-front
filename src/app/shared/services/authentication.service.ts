import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APIS } from "app/config";
import { UserService } from "./user.service";
import { CookieService } from "ngx-cookie-service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';


const tokenKey = "auth-token";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
    helper: JwtHelperService = new JwtHelperService();
    decodedToken: any;
    token: string;

    constructor(
        private cookieService: CookieService,
        private userService: UserService,
        private http: HttpClient
    ) {
        this.token = cookieService.get(tokenKey);
        if (this.token) {
            this.handleDecodedToken();
        }
    }

    login(credentials: any): Observable<any> {
        return this.http.post<any>(
            `${APIS.AUTH}/signin`,
            credentials
        );
    }

    logout(token) {
        // To delete token
        // return this.http.post<any>(`${APIS.AUTH}/logout`, token);
    }

    signOut(): void {
        this.cookieService.delete(null, "/");
    }

    saveToken(token: string): void {
        this.cookieService.delete(null);
        this.cookieService.set(null, token, 365, "/");
        this.token = token;
        this.handleDecodedToken();
    }

    private handleDecodedToken(): void {
        this.decodedToken = this.helper.decodeToken(this.token);
    }

    getToken(): string {
        return this.cookieService.get(null);
    }


    isNotExpired(): boolean {
        // comparaison du timestamp de la date d'exp dans le token et la date actuelle
        return (
            this.helper.decodeToken(this.getToken()).exp >
            Math.floor(Date.now() / 1000)
        );
    }

    isAuthenticated(): boolean {
        return this.getToken() && this.isNotExpired();
    }
}
