// rootSaga => to manage other sagas
//Saga effects
import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects'; // all chay nhieu saga 1 luc

import { sayHello } from './counterSagas';
import { watchIncrement, watchDecrement } from './counterSagas';

// yield chay tuan tu sagas1 -> sagas2 -> sagasN
export default function* rootSaga() {
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement(),
    ]);
}