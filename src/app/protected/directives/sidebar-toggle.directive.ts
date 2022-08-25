import { Directive, HostListener } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';


@Directive({
    selector: '[appSidebarToggle]'
})
export class SidebarToggleDirective {
    public isCollapsed = false

    constructor(private readonly _sidebarService: SidebarService) { }

    /**
     * It toggles the sidebar's collapsed state and reports the new state to the
     * sidebar service
     */
    @HostListener(`click`) onClickToggle(): void {
        const sidebar = document.querySelector(`#sidebar`)
        sidebar?.classList.toggle('is-collapsed')
        sidebar?.classList.contains('is-collapsed')
            ? this.isCollapsed = true
            : this.isCollapsed = false
        this._sidebarService.reportSidebarCollapseStatus(this.isCollapsed)
    }
}
