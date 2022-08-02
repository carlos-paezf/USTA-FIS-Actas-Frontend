import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccessTokenService {
    public _accessToken!: string

    /**
     * It sets the token
     * @param {string} accessToken - The token that you want to set.
     */
    protected _setAccessToken(accessToken: string) {
        this._accessToken = accessToken
        localStorage.setItem('accessToken', accessToken)
    }

    /**
     * It removes the access token from local storage
     */
    protected _removeAccessToken() {
        localStorage.removeItem('accessToken')
    }

    /**
     * The function returns the value of the private variable _token
     * @returns The token property is being returned.
     */
    public get accessToken(): string {
        this._accessToken = localStorage.getItem('accessToken') ?? ''
        return this._accessToken
    }
}
