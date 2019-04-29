
import { all } from 'redux-saga/effects';
import { eventsWatcher } from '../redux/ducks/events'

export default function* rootSaga () {
    yield all([
        eventsWatcher()
    ]);
};