import {ACTION_TYPES} from "./index";

export const addList = title => {
    return ({
        type: ACTION_TYPES.ADD_LIST,
        payload: title
    })
};