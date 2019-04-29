import { takeLatest, call, put } from 'redux-saga/effects';
import { getEventsAPI, SearchEventsAPI } from '../../api/eventsAPI';

const GET_DATA = 'events/GET_DATA';
const ADD_DATA = 'events/ADD_DATA';
const SEARCH_DATA = 'SEARCH_DATA';

export const getData = (payload) => ({ type: GET_DATA, payload });
export const addData = (data) => ({ type: ADD_DATA, payload: data });
export const searchData = (payload) => ({ type: SEARCH_DATA, payload });

function* getDataWorker({ type, payload }) {
  const req = yield getEventsAPI(0, 12)
  const res = yield req.json()
  const newAction = yield call(addData, res)
  yield put(newAction)
  console.log(res)
}

function* searchEventsWorker({type, payload}) {
  const { country, city, offset, limit} = payload;
  const req = yield call(SearchEventsAPI,country, city, offset, limit)
  const res = yield req.json()
  const newAction = yield call(addData, res)
  yield put(newAction)
  console.log(res)

}

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DATA: return payload.reverse();
    default:
      return state;
  }
};


export function* eventsWatcher() {
  yield takeLatest(GET_DATA, getDataWorker);
  yield takeLatest(SEARCH_DATA, searchEventsWorker);
}