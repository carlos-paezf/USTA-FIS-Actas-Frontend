import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { LoadingServiceService } from '../services';


@Injectable({
    providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

    constructor(private readonly _loadingService: LoadingServiceService) { }

    /**
     * It intercepts the request, shows the loading spinner, and then hides the loading spinner when
     * the request is complete
     * @param req - HttpRequest<unknown> - The request object
     * @param {HttpHandler} next - HttpHandler - The next interceptor in the chain.
     * @returns An observable of type HttpEvent
     */
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this._loadingService.show()
        return next.handle(req)
            .pipe(finalize(() => this._loadingService.hide()))
    }
}
