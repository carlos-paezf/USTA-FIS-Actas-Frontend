import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ACTFIS';

    constructor(
        private _tittleService: Title,
        private _router: Router,
        private _activateRoute: ActivatedRoute
    ) { }


    /**
     * We subscribe to the router events and filter out the NavigationEnd event. Then we map the router
     * state to the title of the current route
     */
    ngOnInit(): void {
        const appTitle = this._tittleService.getTitle()

        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this._activateRoute.firstChild
                while (child?.firstChild) {
                    child = child.firstChild
                }
                if (child?.snapshot.data['title']) {
                    return child.snapshot.data['title']
                }
                return appTitle
            })
        ).subscribe((tittle: string) => {
            this._tittleService.setTitle(tittle)
        })
    }
}


/**
 * Important Links 
 * - Dynamic Page Titles: https://www.instagram.com/p/Cfy7hFFD7ti/?utm_source=ig_web_copy_link
*/