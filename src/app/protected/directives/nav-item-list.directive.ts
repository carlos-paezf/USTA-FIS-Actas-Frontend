import { Directive, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[appNavItemList]'
})
export class NavItemListDirective {
    @Input() idNavItem!: number

    /**
     * It toggles the class of the element with the id `list-child-` and the button with the id `list-button-`.
     */
    @HostListener('click') onClickSelectToggle() {
        const element = document.getElementById(`list-child-${this.idNavItem}`)
        const button = document.getElementById(`list-button-${this.idNavItem}`)
        element?.classList.toggle('select')
        button?.classList.toggle('select')
    }
}
