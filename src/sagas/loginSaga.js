import { takeLatest, put, call } from 'redux-saga/effects';
import request, { setToken } from '../utils/request';

function* login(action) {
    const requestConfig = {
        method: 'post',
        data: action.data,
        url: '/api/login'
    }
    let response = yield call(request, requestConfig);
    console.log('response in saga: ', response);

    if (response.success) {
        localStorage.setItem('token', response.token);
        setToken(response.token);
    } else {
        setToken('');
    }

    yield put({
        type: "LOGIN_UPDATE",
        data: response
    });
}

function* detailSaga() {
    yield takeLatest('LOGIN_SAGA', login);
}

export default detailSaga;