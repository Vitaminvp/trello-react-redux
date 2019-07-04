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
      },
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
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      },
      // {
      //   id: 201,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // },
      // {
      //   id: 202,
      //   text:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
      // },
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
        const {listId, text} = action.payload;
      return [
        ...state.map(item => {
            if(item.id === listId) {
                item.cards.push({id: Date.now(), text})
            }
            return item;
        })
      ];
    default:
      return state;
  }
};

export default listReducer;
