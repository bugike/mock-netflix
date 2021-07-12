import { data } from '../../data/data';

const initialState = data;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            let newRecList1 = state.recommendations.filter(item => item.id !== action.data.id);
            let newMyList1 = [...state.mylist, action.data];
            return {...state, mylist: newMyList1, recommendations: newRecList1};
        case 'REMOVE_ITEM':
            let newMyList2 = state.mylist.filter(item => item.id !== action.data.id);
            let newRecList2 = [...state.recommendations, action.data];
            return {...state, mylist: newMyList2, recommendations: newRecList2};
        default:
            return state;
    }
};

export default reducer;