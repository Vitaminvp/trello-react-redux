import {ACTION_TYPES} from "./index";

export const addCard = (listId, text) => {
    return ({
        type: ACTION_TYPES.ADD_CARD,
        payload: {listId, text}
    })
};

export const editCard = (id, listId, newText) => {
    return {
        type: ACTION_TYPES.EDIT_CARD,
        payload: { id, listId, newText }
    };
};

export const deleteCard = (id, listId) => {
    return {
        type: ACTION_TYPES.DELETE_CARD,
        payload: { id, listId }
    };
};