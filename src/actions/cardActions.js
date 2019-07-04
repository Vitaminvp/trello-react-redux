import {ACTION_TYPES} from "./index";

export const addCard = (listId, text) => {
    return ({
        type: ACTION_TYPES.ADD_CARD,
        payload: {listId, text}
    })
};