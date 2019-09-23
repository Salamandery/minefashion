import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    MdShoppingBasket
} from 'react-icons/md';
import {
    Container,
    Cart
} from './styles';

export default function Header() {

    return (
        <Container>
            <Link to="/">
                <h1>MomoShoes</h1>
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span> itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    )
}