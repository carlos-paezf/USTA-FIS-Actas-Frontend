import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { ModulesPermissionService } from '../services';


@Directive({
    selector: '[appValidateModulePermissionItem]'
})
export class ValidateModulePermissionItemDirective implements OnInit {

    @Input() module?: string
    @Input() permission?: string

    private _htmlElement: ElementRef<HTMLElement>

    constructor(
        private _elementRef: ElementRef<HTMLElement>,
        private readonly _modulePermissionService: ModulesPermissionService
    ) {
        this._htmlElement = this._elementRef
    }

    ngOnInit(): void {
        this._hideOrShowItem()
    }

    /**
     * If the user has permission to access the module, then the item is shown. Otherwise, the item is
     * hidden
     */
    private _hideOrShowItem() {
        const hideOrShow: boolean = this._modulePermissionService.validateModulePermissionForItemMenu(this.module, this.permission)
        this._htmlElement.nativeElement.hidden = hideOrShow
        this._htmlElement.nativeElement.style.display = hideOrShow ? '' : 'none'
    }

}
