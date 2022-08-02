import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../classes';
import { AuthService } from '../../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends CustomValidators implements OnInit {

    public colorError: string
    public serviceError: boolean
    public connectionError: boolean

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _authService: AuthService
    ) {
        super()
        this.colorError = 'red'
        this.serviceError = false
        this.connectionError = false
    }

    public loginForm: FormGroup = this._formBuilder.group({
        emailOrUsername: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    })

    ngOnInit(): void {
        this.loginForm.reset({
            emailOrUsername: 'carlos-paezf',
            password: 'developer1234567890'
        })
    }

    /**
     * We're subscribing to the login function in the auth service, and if the response is true, we
     * navigate to the dashboard
     */
    public login() {
        const { emailOrUsername, password } = this.loginForm.value
        this._authService.login(emailOrUsername, password)
            .subscribe((res) => {
                if (res === true) {
                    this._router.navigateByUrl(`/dashboard`)
                } else {
                    if (res === undefined) {
                        this.connectionError = true
                    } else {
                        this.serviceError = true
                        console.error('Error en login:', res)
                    }
                }
                // (res === true)
                //     ? this._router.navigateByUrl(`/dashboard`)
                //     : console.error(res)
            })
    }

    get emailOrUsernameError(): string {
        const emailOrUsername = this.loginForm.get('emailOrUsername')
        if (emailOrUsername?.getError('required')) {
            return `Se debe ingresar con un correo o nombre de usuario`
        } else if (emailOrUsername?.getError('minlength')) {
            return `El correo o nombre de usuario deben tener mínimo 6 caracteres`
        }
        return ``
    }

    get passwordError(): string {
        const password = this.loginForm.get('password')
        if (password?.getError('required')) {
            return `Se debe ingresar con un contraseña`
        } else if (password?.getError('minlength')) {
            return `La contraseña debe tener mínimo 6 caracteres`
        }
        return ``
    }
}
