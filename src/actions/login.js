const login = (dispatch, data) => {
    dispatch({
        type: 'LOGIN_SAGA',
        data: data
    });
}

export {
    login
}