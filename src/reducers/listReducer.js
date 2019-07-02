const initState = [
    {
        id: 1,
        title: "List 1",
        cards: [
            {
                id: 100,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 101,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 102,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 103,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
        ]
    },
    {
        id: 2,
        title: "List 2",
        cards: [
            {
                id: 200,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 201,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 202,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 203,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
            {
                id: 204,
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, explicabo!"
            },
        ]
    }
];


const listReducer =(state = initState, action) => {
    switch (action.type) {
        case 1:
            return ;
        default: return state;
    }
}

export default listReducer;