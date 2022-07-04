import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CustomValidatorService {
    /**
     * It returns a function that takes an AbstractControl and returns an object with a key of the
     * error name and a value of true if the regex doesn't match the control's value, or null if it
     * does
     * @param {RegExp} regex - The regular expression to test the value against.
     * @param {ValidationErrors} error - ValidationErrors
     * @returns A function that takes an AbstractControl and returns an object or null.
     */
    public patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: unknown } | null => {
            if (!control.value) return null

            return regex.test(control.value) ? null : error
        }
    }

    /**
     * If the password and confirmPassword fields don't match, set an error on the confirmPassword
     * field
     * @param {AbstractControl} control - AbstractControl - This is the form control that we are
     * validating.
     */
    public passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password')?.value
        const confirmPassword: string = control.get('confirmPassword')?.value

        if (password !== confirmPassword) {
            control.get('confirmPassword')?.setErrors({ noPasswordMatch: true })
        }
    }
}
