import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/interface';
import { IAuthResponse } from '../interface';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _baseURL: string = `${environment.baseURL}/auth`
    private _user!: IUser

    constructor(private _http: HttpClient) { }

    /**
     * The function returns a copy of the user object
     * @returns A copy of the user object.
     */
    get user() {
        return { ...this._user }
    }

    /**
     * We're sending a POST request to the `/login` endpoint with the user's email or username and
     * password. If the request is successful, we're storing the user's data in the `_user` property
     * @param {string} emailOrUsername - string - The email or username of the user
     * @param {string} password - string - The password of the user
     * @returns An observable of a boolean.
     */
    public login = (emailOrUsername: string, password: string): Observable<Boolean> => {
        const url = `${this._baseURL}/login`
        const body = { emailOrUsername, password }
        return this._http.post<IAuthResponse>(url, body)
            .pipe(
                tap(res => {
                    if (res.status === 200) {
                        this._user = { ...res.data.user }
                    }
                }),
                map(res => (res.status === 200)),
                catchError(error => of(false))
            )
    }

    public register() { }
}
