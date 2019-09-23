import {
    createStore,
    applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import combine from './Reducers/combine';
import rootSaga from './Reducers/rootSaga';

const SagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(SagaMiddleware);

const store = createStore(combine, enhancer);

SagaMiddleware.run(rootSaga);

export default store;