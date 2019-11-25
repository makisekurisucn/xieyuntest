import { call, all } from 'redux-saga/effects';

import listSaga from './listSaga';
import loginSaga from './loginSaga';

export default function* rootSagas() {
    yield all([
        call(listSaga),
        call(loginSaga)
    ])
}