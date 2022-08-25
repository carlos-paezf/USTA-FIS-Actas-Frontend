import { IItemsMenu } from "../interface";


export const ITEMS_SEARCH: IItemsMenu[] = [
    {
        id: 1,
        icon: 'pi pi-home',
        label: 'Inicio',
        routerLink: '/dashboard'
    },
    {
        id: '2.1',
        icon: 'pi pi-list',
        label: 'Listar actas de reunión',
        module: 'meeting-minutes',
        permission: 'read',
        routerLink: '/meeting-minutes/list'
    },
    {
        id: '2.2',
        icon: 'pi pi-plus',
        label: 'Crear nueva acta de reunión',
        module: 'meeting-minutes',
        permission: 'create',
        routerLink: '/meeting-minutes/create'
    },
    {
        id: '3.1',
        icon: 'pi pi-users',
        label: 'Listar usuarios',
        module: 'users',
        permission: 'read',
        routerLink: '/users/list'
    },
    {
        id: '3.2',
        icon: 'pi pi-user-plus',
        label: 'Crear usuario',
        module: 'users',
        permission: 'create',
        routerLink: '/users/create'
    },
    {
        id: '3.3',
        icon: 'pi pi-key',
        label: 'Administrar roles',
        module: 'roles',
        permission: 'read',
        routerLink: '/roles'
    }
]