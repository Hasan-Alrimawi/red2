import { User } from "src/app/app.component";
import * as ReduxActions from "../redux/actions.redux"


export interface UsersState{
    users: User[];
}

const initialState: UsersState = {
    users: [
        new User("hasan","rimawi","hasan.alrimawi@exalt.ps"),
        new User("hasan","rimawi","hasan.alrimawi@exalt.ps"),
    ]
};

// export const initialState ={users: [new User("hasan","rimawi","hasan.alrimawi@exalt.ps")]};
export function personalDataReducer(state:UsersState = initialState, action: ReduxActions.AddUser):UsersState{
    switch(action.type){
        case ReduxActions.ADD_USER:
            return{
                ...state,
                // users:[...state.users, action.payload]
                users:[...state.users]
            }
    }
}