import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SidebarService {

    @Output() isCollapsedEmitter = new EventEmitter<boolean>();

    /**
     * The function takes a boolean value as an argument and emits the same value to the parent
     * component
     * @param {boolean} status - boolean - This is the status of the sidebar. If it's collapsed, it
     * will be true. If it's not collapsed, it will be false.
     */
    reportSidebarCollapseStatus(status: boolean) {
        this.isCollapsedEmitter.emit(status)
    }
}
