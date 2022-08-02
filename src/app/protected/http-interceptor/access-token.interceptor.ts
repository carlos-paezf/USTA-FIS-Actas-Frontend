import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessTokenService } from 'src/app/shared/services';


@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

    constructor(private readonly _accessTokenService: AccessTokenService) { }

    /**
     * The function intercepts the request, gets the access token from the auth service, and adds the
     * access token to the request header
     * @param request - HttpRequest<unknown> - The request object
     * @param {HttpHandler} next - HttpHandler - The next interceptor in the chain.
     * @returns The next handler in the chain.
     */
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const accessToken: string = this._accessTokenService.accessToken

        if (accessToken) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
            })
        }
        return next.handle(request);
    }
}
