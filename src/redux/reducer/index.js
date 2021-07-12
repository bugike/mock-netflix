import {
    ADD_ITEM,
    REMOVE_ITEM,
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
    loading: false,
    error: null,
    data: {
        mylist: [],
        recommendations: []
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    mylist: action.data.mylist,
                    recommendations: action.data.recommendations
                }
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case ADD_ITEM:
            let newRecList1 = state.data.recommendations.filter(item => item.id !== action.data.id);
            let newMyList1 = [...state.data.mylist, action.data];
            return {
                ...state, 
                data: {
                    mylist: newMyList1, 
                    recommendations: newRecList1
                }
            };
        case REMOVE_ITEM:
            let newMyList2 = state.data.mylist.filter(item => item.id !== action.data.id);
            let newRecList2 = [...state.data.recommendations, action.data];
            return {
                ...state, 
                data: {
                    mylist: newMyList2, 
                    recommendations: newRecList2
                }
            };
        default:
            return state;
    }
};

export default reducer;