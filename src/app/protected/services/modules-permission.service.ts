import { Injectable } from '@angular/core';

import { AccessTokenService } from 'src/app/shared/services';


@Injectable({
    providedIn: 'root'
})
export class ModulesPermissionService {
    constructor(
        private readonly _accessTokenService: AccessTokenService
    ) { }

    /**
     * It takes a module and permission as parameters, then it checks if the module and permission
     * exist in the decoded token
     * @param {string} module - The module name
     * @param {string} permission - string - The permission you want to check for.
     * @returns A boolean value.
     */
    public validateModulePermission(module: string, permission: string): boolean {
        const decodeToken = this._accessTokenService.decodeAccessToken

        const matches = decodeToken.modulesPermissions.find(item => {
            return item.moduleId === module && item.permissionId === permission
        })
        return matches ? true : false
    }

    /**
     * If the module or permission is undefined, return true. Otherwise, return the result of the
     * validateModulePermission function
     * @param {string | undefined} module - The module name
     * @param {string | undefined} permission - The permission to validate.
     * @returns A boolean value.
     */
    public validateModulePermissionForItemMenu(module: string | undefined, permission: string | undefined): boolean {
        if (module === undefined || permission === undefined) return true

        return this.validateModulePermission(module, permission)
    }
}
