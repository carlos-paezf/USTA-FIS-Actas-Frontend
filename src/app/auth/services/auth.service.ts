import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IRegisterUser, IUser } from 'src/app/interface';
import { IAuthResponse } from '../interface';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _baseURL = `${environment.baseURL}/auth`
    private _user!: IUser
    private _accessToken!: string

    constructor(private readonly _http: HttpClient) { }

    /**
     * This function sets the user property to the user object passed in
     * @param {IUser} user - IUser - This is the user object that we're going to be setting.
     */
    private _setUser(user: IUser) {
        this._user = user
    }

    /**
     * The function returns a copy of the user object
     * @returns A copy of the user object.
     */
    get user() {
        return { ...this._user }
    }

    /**
     * It sets the token
     * @param {string} accessToken - The token that you want to set.
     */
    private _setAccessToken(accessToken: string) {
        this._accessToken = accessToken
        localStorage.setItem('accessToken', accessToken)
    }

    /**
     * The function returns the value of the private variable _token
     * @returns The token property is being returned.
     */
    get accessToken(): string {
        this._accessToken = localStorage.getItem('accessToken') ?? ''
        return this._accessToken
    }

    /**
     * We're sending a POST request to the server with the user's email or username and password. If
     * the server responds with a status of 200, we're storing the user's data and access token in
     * local storage
     * @param {string} emailOrUsername - string, password: string
     * @param {string} password - string - The password of the user
     * @returns Observable<boolean>
     */
    public login(emailOrUsername: string, password: string): Observable<boolean> {
        const url = `${this._baseURL}/login`
        const body = { emailOrUsername, password }

        return this._http.post<IAuthResponse>(url, body)
            .pipe(
                tap(res => {
                    if (res.status === 200) {
                        this._setAccessToken(res.data.accessToken)
                        this._setUser({ ...res.data.user })
                    }
                }),
                map(res => (res.status === 200)),
                catchError(({ error }) => of(error.error))
            )
    }

    /**
     * It takes in a user's registration data, sends it to the server, and returns an observable that
     * emits a boolean value indicating whether the registration was successful or not
     * @param {IRegisterUser} data - IRegisterUser - this is the data that we're sending to the server.
     * @returns Observable<unknown>
     */
    public register(data: IRegisterUser): Observable<unknown> {
        const url = `${this._baseURL}/register`
        const body: IRegisterUser = { ...data }

        return this._http.post<IAuthResponse>(url, body)
            .pipe(
                tap(res => {
                    if (res.status === 201) {
                        this._setAccessToken(res.data.accessToken)
                        this._setUser({ ...res.data.user })
                    }
                }),
                map(res => (res.status === 201)),
                catchError(({ error }) => of(error.error))
            )
    }
}
