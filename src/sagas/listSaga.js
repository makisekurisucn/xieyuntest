import { takeLatest, put, call } from 'redux-saga/effects';
import request from '../utils/request';

function* getList(action) {
    const requestConfig = {
        method: 'get',
        url: '/api/list'
    }
    let response = yield call(request, requestConfig);

    yield put({
        type: "LIST_UPDATE",
        data: response
    });
}

function* detailSaga() {
    yield takeLatest('GETLIST_SAGA', getList);
}

export default detailSaga;