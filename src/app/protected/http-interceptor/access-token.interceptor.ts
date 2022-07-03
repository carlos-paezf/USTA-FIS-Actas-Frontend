import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services';


@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken: string = this._authService.accessToken

        if (accessToken) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
            })
        }
        return next.handle(request);
    }
}
