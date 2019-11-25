const initialState = {
    isLogin: false,
    isError: false
};

function processLogin(data) {
    if (data.success === true) {
        return {
            isLogin: true,
            isError: false
        }
    } else {
        return {
            isLogin: false,
            isError: true
        }
    }
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_UPDATE':
            return Object.assign({}, state, processLogin(action.data));
        default:
            return state;
    }
}
export default login;