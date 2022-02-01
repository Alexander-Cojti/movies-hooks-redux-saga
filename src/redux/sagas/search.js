import { put, call, takeLatest,takeEvery } from 'redux-saga/effects';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_COMPLETE, SEARCH_MOVIE_ERROR } from '../../consts/actionTypes';
import { apiCall } from '../api';

export function* searchMovie(payload) {
    try {
        const results = yield call(apiCall, `&s=${payload.moviName}`, null, null, 'GET');
        yield put({ type: SEARCH_MOVIE_COMPLETE, results })
    }
    catch (error) {
        yield put({ type: SEARCH_MOVIE_ERROR, error })
    }
}

export default function* search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
}


