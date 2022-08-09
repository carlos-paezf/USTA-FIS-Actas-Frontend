import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

    constructor(private _authenticationService: AuthService, private _router: Router) { }

    /**
     * The function intercepts the request, and if the request returns a 401 status code, the user is
     * logged out and redirected to the login page
     * @param request - HttpRequest<unknown> - The request object
     * @param {HttpHandler} next - HttpHandler - The next interceptor in the chain.
     * @returns Observable<HttpEvent<unknown>>
     */
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this._authenticationService.logout()
                this._router.navigate(['/auth'])
            }

            const error = err.error.message || err.status
            return throwError(() => new Error(error))
        }))
    }
}
