import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IBaseResponse } from 'src/app/interface';


@Injectable({
    providedIn: 'root'
})
export class AsynchronousUsernameValidatorService implements AsyncValidator {

    private _baseURL = `${environment.baseURL}/auth`

    constructor(private readonly _http: HttpClient) { }

    /**
     * We're using the `get` method of the `HttpClient` to make a request to the server. If the server
     * returns a status of 100, then the username is not in use, and we return `null`. If the server
     * returns a status other than 100, then the username is in use, and we return an object with a key of
     * `usernameIsUsed` and a value of `true`
     * @param control - AbstractControl<any, any>
     * @returns Observable<ValidationErrors | null>
     */
    validate(control: AbstractControl<unknown, unknown>): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
        const username = control.value

        return this._http.get<IBaseResponse>(`${this._baseURL}/validate?username=${username}`)
            .pipe(map(res => (res.status === 100) ? null : { usernameIsUsed: true }))
    }
}
