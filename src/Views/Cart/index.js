import React from 'react';
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
export default function Carrinho() {

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
                    <tr>
                        <td>
                            <div id="wrapper">
                                <img src="" alt=""/>
                            </div>
                        </td>
                        <td>
                            <strong>Produto name legal</strong>
                            <span>R$ 129.00</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={2} />
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