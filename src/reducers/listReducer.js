import { ACTION_TYPES } from "../actions";

const initState = [
  {
    id: 1,
    title: "List 1",
    cards: [
      {
        id: 100,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      }
      // {
      //   id: 101,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // },
      // {
      //   id: 102,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // },
      // {
      //   id: 103,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // }
    ]
  },
  {
    id: 2,
    title: "List 2",
    cards: [
      {
        id: 200,
        text:
          "111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      },
      {
        id: 201,
        text:
          "2222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      },
      {
        id: 202,
        text:
          "33333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      }
      // {
      //   id: 203,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // },
      // {
      //   id: 204,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // }
    ]
  }
];

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_LIST:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          cards: []
        }
      ];
    case ACTION_TYPES.ADD_CARD:
      const { listId, text } = action.payload;
      return [
        ...state.map(item => {
          if (item.id === listId) {
            item.cards.push({ id: Date.now(), text });
          }
          return item;
        })
      ];
    case ACTION_TYPES.DRAG_DONE:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId
      } = action.payload;

      if (droppableIdStart === droppableIdEnd) {
        return [
          ...state.map(list => {
            if (droppableIdStart === list.id.toString()) {
              const card = list.cards.splice(droppableIndexStart, 1);
              list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return list;
          })
        ];
      }

      if (droppableIdStart !== droppableIdEnd) {
        const newState = [...state];
        const listStart = newState.find(
            item => item.id.toString() === droppableIdStart
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = newState.find(
            item => item.id.toString() === droppableIdEnd
        );
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);

        return newState;
      }

    // case ACTION_TYPES.DELETE_CARD: {
    //   const { listID, id } = action.payload;
    //
    //   const list = state[listID];
    //   const newCards = list.cards.filter(cardID => cardID !== id);
    //
    //   return { ...state, [listID]: { ...list, cards: newCards } };
    // }
    //
    // case ACTION_TYPES.EDIT_LIST_TITLE: {
    //   const { listID, newTitle } = action.payload;
    //
    //   const list = state[listID];
    //   list.title = newTitle;
    //   return { ...state, [listID]: list };
    // }
    //
    // case ACTION_TYPES.DELETE_LIST: {
    //   const { listID } = action.payload;
    //   const newState = state;
    //   delete newState[listID];
    //   return newState;
    // }

    default:
      return state;
  }
};

export default listReducer;
