const getList = (dispatch) => {
    dispatch({
        type: 'GETLIST_SAGA'
    });
}

export {
    getList
}