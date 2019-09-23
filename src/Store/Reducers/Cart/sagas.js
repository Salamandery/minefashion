import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../Services/api';
import {formatPrice} from '../../../Util/format';

function* addToCart({id}) {
    const productExists = yield select(
        state => state.cart.find(p => p.id === id),
    )

    if (productExists){
        const amount = productExists.amount +1;
        yield put({
            type: "INCREMENT_to_CART",
            id,
            amount
        })
    } else {
        const res = yield call(api.get, `/products/${id}`);

        const data = {
            ...res.data,
            amount: 1,
            priceFormatted: formatPrice(res.data.price)
        }
    
        yield put({
            type: "ADD_TO_CART",
            product: data
        });
    }
}

export default all([
    takeLatest('AFTER_TO_CART', addToCart),
]);