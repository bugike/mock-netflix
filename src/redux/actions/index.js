export const addItem = item => {
    return {
        type: 'ADD_ITEM',
        data: item
    };
};

export const removeItem = item => {
    return {
        type: 'REMOVE_ITEM',
        data: item
    };
};