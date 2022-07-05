import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { debounceTime, first, map, Observable, switchMap } from 'rxjs';
import { IAsyncValidatorsResponse } from '../interface';


@Injectable({
    providedIn: 'root'
})
export class AsynchronousUsernameValidatorService implements AsyncValidator {

    private _baseURL = `${environment.baseURL}/auth`

    constructor(private readonly _http: HttpClient) { }

    /**
     * We're using the valueChanges observable to listen for changes to the form control's value. We're
     * then using the debounceTime operator to wait for a second before we make the request to the
     * server. We're using the switchMap operator to cancel any previous requests and make a new
     * request to the server. We're using the map operator to map the response from the server to a
     * validation error object. We're using the first operator to complete the observable after the
     * first value is emitted
     * @param control - AbstractControl<unknown, unknown>
     * @returns Observable<ValidationErrors | null>
     */
    validate(control: AbstractControl<unknown, unknown>): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
        return control.valueChanges
            .pipe(
                debounceTime(1000),
                switchMap(value => this._validateUniqueUsername(value)),
                map((unique: boolean) => (unique) ? null : { usernameIsUsed: true }),
                first()
            )
    }

    /**
     * It takes a username as an argument, makes a GET request to the server, and returns a boolean
     * value based on the response
     * @param {unknown} username - The username to validate
     * @returns A boolean value.
     */
    private _validateUniqueUsername(username: unknown) {
        return this._http.get<IAsyncValidatorsResponse>(`${this._baseURL}/validate?username=${username}`)
            .pipe(map(res => (res.data.isUnique)))
    }
}
