
import { IBaseResponse } from "src/app/interface"
import { IUser } from "src/app/interface/user.interface"


export interface IAuthResponse extends IBaseResponse {
    data: {
        accessToken: string,
        user: IUser
    }
}


export interface IAsyncValidatorsResponse extends IBaseResponse {
    data: {
        isUnique: boolean
    }
}
