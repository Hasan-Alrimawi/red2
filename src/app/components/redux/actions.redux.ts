import { Action } from "@ngrx/store";
import { User } from "src/app/app.component";

export const ADD_USER = "ADD_USER";

export class AddUser implements Action{
    readonly type = ADD_USER;
    constructor(public payload= User){}
}