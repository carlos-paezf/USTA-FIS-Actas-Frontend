import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {
    private static readonly routeDataBreadcrumb = 'title'
    public readonly dashboardItem = { icon: 'pi pi-home', routerLink: '/dashboard' }
    public itemsMenu!: MenuItem[]

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {
        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.itemsMenu = this.createBreadcrumbs(this._activatedRoute.root))
    }

    /**
     * It takes a route, a url, and an array of breadcrumbs. It then loops through the children of the
     * route, appending the url with the route's url, and then pushes a new breadcrumb to the array. It
     * then returns the breadcrumbs
     * @param {ActivatedRoute} route - ActivatedRoute - The current route
     * @param [url] - The current url.
     * @param {MenuItem[]} breadcrumbs - MenuItem[] = []
     * @returns An array of MenuItem objects.
     */
    public createBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
        const children: ActivatedRoute[] = route.children

        if (!children.length) return breadcrumbs

        for (const child of children) {
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/')

            if (routeURL !== '') {
                url += `/${ routeURL }`
            }

            const label = child.snapshot.data[ NavbarComponent.routeDataBreadcrumb ]
            label && breadcrumbs.push({ label, url })

            return this.createBreadcrumbs(child, url, breadcrumbs)
        }

        return breadcrumbs
    }
}
