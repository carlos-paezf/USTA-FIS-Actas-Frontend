import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class CustomValidators {
    public static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
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
    public static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password')?.value
        const confirmPassword: string = control.get('confirmPassword')?.value

        if (password !== confirmPassword) {
            control.get('confirmPassword')?.setErrors({ noPasswordMatch: true })
        }
    }

    protected isInvalidField(control: AbstractControl, field: string): boolean {
        return Boolean(
            control.get(field)?.errors &&
            control.get(field)?.touched &&
            control.get(field)?.invalid
        )
    }
}