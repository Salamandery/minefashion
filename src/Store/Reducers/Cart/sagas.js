import api from '../../../Services/api';
//import history from '../../../Services/history'; se redirect for necessario
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import {toast} from 'react-toastify';
import {formatPrice} from '../../../Util/format';

function* addToCart({id}) {
    const productExists = yield select(
        state => state.cart.find(p => p.id === id),
    )

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount +1;

    if (amount > stockAmount) {
        toast.error("Não há mais estoque do produto solicitado!");
        return;
    }

    if (productExists){ 
        yield put({
            type: "UPDATEAMOUNT_to_CART",
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
        //history.push('/cart');
    }
}
function* UpdateAmount({id, amount}) {
    if (amount <= 0) {
        return;
    }
    const productExists = yield select(
        state => state.cart.find(p => p.id === id),
    )
    
    if (productExists) {
        const stock = yield call(api.get, `/stock/${id}`);
        const stockAmount = stock.data.amount;
        
        if(amount > stockAmount) {
            toast.error("Não há mais estoque do produto solicitado!");
            return;
        }

        yield put({
            type: "UPDATEAMOUNT_to_CART",
            id,
            amount
        });
    } else {
        toast.error("Ops.. Algo de errado aconteceu :(");
        return;
    }
}
export default all([
    takeLatest('AFTER_TO_CART', addToCart),
    takeLatest('AFTER_UPDATEAMOUNT_to_CART', UpdateAmount),
]);