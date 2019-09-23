import React from 'react';
import {
    MdShoppingCart
} from 'react-icons/md';
import {
    ProductList
} from './style';
export default function Home(){

    return (
        <ProductList>
            <li>
                <div>
                    <img src="" alt="" />
                </div>
                <strong>Product name legal</strong>
                <span>R$ 129.00</span>
                <button type="button">
                    <div>
                        <MdShoppingCart size={36} color="#fff" /> 3
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    )
}