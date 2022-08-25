export interface IRole {
    id: string
    roleName: string
}

export interface IModulePermission {
    moduleId: string,
    permissionId: string
}

export interface IAccessToken {
    id: string,
    email: string,
    username: string,
    role: {
        id: string,
        roleName: string,
        deletedAt: Date | null
    },
    modulesPermissions: IModulePermission[]
}