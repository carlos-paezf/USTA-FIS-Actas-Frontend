import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from 'src/app/auth/services';
import { SidebarService } from '../../services/sidebar.service';
import { ITEMS_SIDENAV } from '../../util';
import { IAccessToken } from '../../../shared/interfaces/access-token.interface';
import { IItemsMenu } from '../../interface';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, AfterViewInit {

    public isCollapsed: boolean
    public items: IItemsMenu[] = []
    public user!: IAccessToken


    constructor(
        private readonly _authService: AuthService,
        private readonly _sidebarService: SidebarService
    ) {
        this.isCollapsed = false
    }

    /**
     * The function is called when the component is initialized. It sets the user variable to the
     * decoded access token and sets the items variable to the items in the sidenav
     */
    ngOnInit() {
        this.user = this._authService.decodeAccessToken
        this.items = ITEMS_SIDENAV
    }

    /**
     * The function subscribes to the isCollapsedEmitter and sets the isCollapsed variable to the
     * status of the sidebar
     */
    ngAfterViewInit(): void {
        this._sidebarService.isCollapsedEmitter.subscribe(status => {
            this.isCollapsed = status
        })
    }
}
