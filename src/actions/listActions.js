import {ACTION_TYPES} from "./index";



export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
) => ({
    type: ACTION_TYPES.DRAG_DONE,
    payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
    }
});


export const addList = title => {
    return ({
        type: ACTION_TYPES.ADD_LIST,
        payload: title
    })
};
