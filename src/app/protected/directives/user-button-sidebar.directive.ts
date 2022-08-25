import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services';
import { SidebarService } from '../services';
import { ToastrNotificationService } from '../../shared/services/toastr-notification.service';


@Directive({
    selector: '[appUserButtonSidebar]'
})
export class UserButtonSidebarDirective {
    constructor(
        private readonly _router: Router,
        private readonly _authService: AuthService,
        private readonly _toastrService: ToastrNotificationService,
        private readonly _sidebarService: SidebarService
    ) { }

    /**
     * If the sidebar is collapsed, remove the class 'is-collapsed' from the
     * sidebar. Otherwise, logout
     * @returns The return value of the function is the return value of the last
     * statement executed.
     */
    @HostListener('click') onClickButton() {
        const sidebar = document.querySelector(`#sidebar`)
        if (sidebar?.classList.contains('is-collapsed')) {
            sidebar?.classList.remove('is-collapsed')
            return this._sidebarService.reportSidebarCollapseStatus(false)
        }
        return this.logout()
    }

    /**
     * It logs out the user and redirects to the login page.
     */
    public logout(): void {
        if (window.confirm(`¿Desea cerrar la sesión?`)) {
            this._authService.logout()
            this._toastrService.info('Has cerrado la sesión', 'Adiós')
            this._router.navigate(['/auth']);
        }
        return
    }
}
