import React from 'react';
import {
    connect
} from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete
} from 'react-icons/md';
import {
    Container,
    ProductTable,
    Total
} from './style';
import {
    formatPrice
} from '../../Util//format';
function Cart({products, total, dispatch}) {

    function handlerIncrement(product){
        dispatch({
            type: "INCREMENT_to_CART",
            id: product.id,
            amount: product.amount +1
        })
    }
    function handlerDecrement(product){
        dispatch({
            type: "DECREMENT_to_CART",
            id: product.id,
            amount: product.amount -1
        })
    }
    function handlerDelete(product){
        dispatch({
            type: "REMOVE_FROM_CART",
            id: product.id
        })
    }
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD.</th>
                        <th>SUB TOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod=>(
                        <tr key={prod.id}>
                            <td>
                                <div id="wrapper">
                                    <img src={prod.image} alt={prod.title} />
                                </div>
                            </td>
                            <td>
                                <strong>{prod.title}</strong>
                                <span>{prod.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={()=>handlerDecrement(prod)}>
                                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                                    </button>
                                    <input type="number" readOnly value={prod.amount} />
                                    <button type="button" onClick={()=>handlerIncrement(prod)}>
                                        <MdAddCircleOutline size={20} color="#7159c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{prod.SubTotal}</strong>
                            </td>
                            <td>
                                <button type="button" onClick={()=>handlerDelete(prod)}>
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">
                    FINALIZAR PEDIDO
                </button>
                
                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
export default connect(state => ({
    products: state.cart.map(product=>({
        ...product,
        SubTotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice(state.cart.reduce((total, product) =>{
        return total + product.price * product.amount
    }, 0))
}))(Cart);