import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const addItem = item => {
    return {
        type: ADD_ITEM,
        data: item
    };
};

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        data: item
    };
};

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = response => ({
    type: FETCH_DATA_SUCCESS,
    data: response
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE
});

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataBegin());
        axios.get('/db.json')
            .then(res => {
                console.log(res.data);
                dispatch(fetchDataSuccess(res.data));
            })
            .catch(error => {
                dispatch(fetchDataFailure(error));
            });
    };
}