import { takeLatest, put, call } from 'redux-saga/effects';
import request from '../utils/request';

function* getList(action) {
    const requestConfig = {
        method: 'get',
        url: '/api/list'
    }
    let response = yield call(request, requestConfig);
    console.log('response in listsaga: ', response);

    // if (response.success) {
    //     setToken(response.token);
    // } else {
    //     setToken('');
    // }

    yield put({
        type: "LIST_UPDATE",
        data: response
    });
}

function* detailSaga() {
    yield takeLatest('GETLIST_SAGA', getList);
}

export default detailSaga;