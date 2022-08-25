import { Directive, HostListener } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';


@Directive({
    selector: '[appSearchIconSidebar]'
})
export class SearchIconSidebarDirective {

    constructor(private readonly _sidebarService: SidebarService) { }

    /**
     * If the sidebar is collapsed, remove the class 'is-collapsed' from the
     * sidebar
     * @returns the value of the function reportSidebarCollapseStatus.
     */
    @HostListener('click') onClickIcon() {
        const sidebar = document.querySelector(`#sidebar`)
        if (sidebar?.classList.contains('is-collapsed')) {
            sidebar?.classList.remove('is-collapsed')
            return this._sidebarService.reportSidebarCollapseStatus(false)
        }
    }
}
