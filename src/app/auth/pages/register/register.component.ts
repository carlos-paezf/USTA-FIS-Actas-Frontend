import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../classes';
import { AuthService } from '../../services';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends CustomValidators implements OnInit {

    private _emailPattern = new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`)
    public colorError = `red`

    constructor(private _formBuilder: FormBuilder, private _router: Router, private _authService: AuthService) {
        super()
    }

    public registerForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: ['', [Validators.required]],
        position: [''],
        email: ['', [Validators.required, Validators.pattern(this._emailPattern)]],
        password: ['', [
            Validators.required, Validators.minLength(6),
            CustomValidators.patternValidator(/\d/, { hasNumber: true }),
            CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
            CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true })
        ]],
        confirmPassword: ['', [Validators.required]],
    }, {
        validator: CustomValidators.passwordMatchValidator
    })


    ngOnInit(): void {
        this.registerForm.reset()
    }

    get nameError(): string {
        return (this.registerForm.get('name')?.getError('required'))
            ? `Debe ingresar su nombre(s)` : ``
    }

    get lastNameError(): string {
        return (this.registerForm.get('lastName')?.getError('required'))
            ? `Debe ingresar su apellido(s)` : ``
    }

    get usernameError(): string {
        return ``
    }

    get emailError(): string {
        return ``
    }

    get passwordError(): string {
        const password = this.registerForm.get('password')
        if (password?.hasError('required')) {
            return `Se debe ingresar una contraseña`
        } else if (password?.hasError('minlength')) {
            return `La contraseña debe tener al menos 6 caracteres`
        } else if (password?.hasError('hasNumber')) {
            return `La contraseña debe tener al menos un número`
        } else if (password?.hasError('hasCapitalCase')) {
            return `La contraseña debe tener al menos una mayúscula`
        } else if (password?.hasError('hasSmallCase')) {
            return `La contraseña debe tener al menos una minúscula`
        }
        return ``
    }

    get confirmPasswordError(): string {
        return (this.registerForm.get('confirmPassword')?.hasError('noPasswordMatch'))
            ? `Las contraseñas ingresadas no coinciden` : ``
    }
}
