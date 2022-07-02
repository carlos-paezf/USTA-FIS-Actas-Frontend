import { IBaseEntity } from "./base-entity.interface";


export interface IRole extends IBaseEntity {
    roleName: string,
    roleDescription: string
}