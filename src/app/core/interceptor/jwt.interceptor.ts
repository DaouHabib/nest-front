import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "app/shared/services/authentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authservice: AuthenticationService) {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token: string = this.authservice.getToken();
        if (!req.url.includes("login")) {
            if (token) {
                const authReq = req.clone({
                    headers: req.headers.set("x-auth-token", token),
                });
                return next.handle(authReq);
            }
        }
        else {
            return next.handle(req);
        }
    }
}
