import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appInputPassword]'
})
export class InputPasswordDirective {

    @Input() idInput!: string
    @Input() idToggle!: string

    /**
     * If the input type is password, change it to text and change the icon to
     * pi-eye-slash. Otherwise, change the input type to password and change the
     * icon to pi-eye
     */
    @HostListener(`click`) onClick() {
        const passwordInput = document.querySelector(`#${this.idInput}`)
        const passwordToggle = document.querySelector(`#${this.idToggle} i`)

        if (passwordInput?.getAttribute(`type`) === `password`) {
            passwordInput.setAttribute(`type`, `text`)
            passwordToggle?.classList.remove(`pi-eye`)
            passwordToggle?.classList.add(`pi-eye-slash`)

        } else {
            passwordInput?.setAttribute(`type`, `password`)
            passwordToggle?.classList.remove(`pi-eye-slash`)
            passwordToggle?.classList.add(`pi-eye`)
        }
    }
}
