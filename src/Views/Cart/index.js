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
function Cart({products}) {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Qtd.</th>
                        <th>Sub Total.</th>
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
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                                    </button>
                                    <input type="number" readOnly value={prod.amount} />
                                    <button type="button">
                                        <MdAddCircleOutline size={20} color="#7159c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 258.00</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">
                    Finalizar Pedido
                </button>
                
                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 1900.00</strong>
                </Total>
            </footer>
        </Container>
    );
}
export default connect(state => ({
    products: state.cart
}))(Cart);