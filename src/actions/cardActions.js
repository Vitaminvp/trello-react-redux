import {ACTION_TYPES} from "./index";

export const addCard = (listId, text) => {
    return ({
        type: ACTION_TYPES.ADD_CARD,
        payload: {listId, text}
    })
};

export const editCard = (id, listID, newText) => {
    return {
        type: ACTION_TYPES.EDIT_CARD,
        payload: { id, listID, newText }
    };
};

export const deleteCard = (id, listId) => {
    return {
        type: ACTION_TYPES.DELETE_CARD,
        payload: { id, listId }
    };
};