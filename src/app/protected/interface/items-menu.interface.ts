export interface IItemsMenu {
    id: string | number
    icon: string
    label: string
    module?: string
    permission?: string
    routerLink: string
    childItems?: IItemsMenu[]
}