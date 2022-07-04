import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../classes';
import { AsynchronousEmailValidatorService, AsynchronousUsernameValidatorService, AuthService, CustomValidatorService } from '../../services';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends CustomValidators implements OnInit {

    private _emailPattern = new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`)
    public colorError = `red`

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _authService: AuthService,
        private readonly _customValidator: CustomValidatorService,
        private readonly _emailValidator: AsynchronousEmailValidatorService,
        private readonly _usernameValidator: AsynchronousUsernameValidatorService
    ) {
        super()
    }

    public registerForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)], [this._usernameValidator]],
        position: [''],
        email: ['', [Validators.required, Validators.pattern(this._emailPattern)], [this._emailValidator]],
        password: ['', [
            Validators.required, Validators.minLength(6),
            this._customValidator.patternValidator(/\d/, { hasNumber: true }),
            this._customValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
            this._customValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
            this._customValidator.patternValidator(/[@$¿?¡!()[\]*/+\-_{}#%&=^]/, { hasSpecialCharacterCase: true })
        ]],
        confirmPassword: ['', [Validators.required]],
    }, {
        validators: [this._customValidator.passwordMatchValidator]
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
        const username = this.registerForm.get('username')
        if (username?.getError('required')) {
            return `Se debe ingresar un nombre de usuario`
        } else if (username?.getError('minlength')) {
            return `El nombre de usuario debe tener mínimo 6 caracteres`
        } else if (username?.getError('maxlength')) {
            return `El nombre de usuario no debe tener más de 15 caracteres`
        } else if (username?.getError('usernameIsUsed')) {
            return `El nombre de usuario ya está en uso`
        }
        return ``
    }

    get emailError(): string {
        const email = this.registerForm.get('email')
        if (email?.getError('required')) {
            return `Se debe ingresar un correo electronico`
        } else if (email?.getError('pattern')) {
            return `Se debe ingresar un formato de correo válido`
        } else if (email?.getError('emailIsUsed')) {
            return `El correo electrónico ya está en uso`
        }
        return ``
    }

    get passwordError(): string {
        const password = this.registerForm.get('password')
        if (password?.getError('required')) {
            return `Se debe ingresar una contraseña`
        } else if (password?.getError('minlength')) {
            return `La contraseña debe tener al menos 6 caracteres`
        } else if (password?.getError('hasNumber')) {
            return `La contraseña debe tener al menos un número`
        } else if (password?.getError('hasCapitalCase')) {
            return `La contraseña debe tener al menos una mayúscula`
        } else if (password?.getError('hasSmallCase')) {
            return `La contraseña debe tener al menos una minúscula`
        } else if (password?.getError('hasSpecialCharacterCase')) {
            return `La contraseña debe tener al menos un carácter especial`
        }
        return ``
    }

    get confirmPasswordError(): string {
        return (this.registerForm.get('confirmPassword')?.getError('noPasswordMatch'))
            ? `Las contraseñas ingresadas no coinciden` : ``
    }
}
