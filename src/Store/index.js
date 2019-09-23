import {
    createStore
} from 'redux';
import  combine from './Reducers/combine';

const store = createStore(combine);

export default store;