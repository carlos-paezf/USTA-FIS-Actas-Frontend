import { IBaseEntity } from "./base-entity.interface";
import { IRole } from "./role.interface";


export interface IUser extends IBaseEntity {
    name: string,
    lastName: string,
    username: string,
    email: string,
    position: string,
    role: IRole,
    password: "Not Permission"
}