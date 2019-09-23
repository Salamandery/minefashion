import React, {
    useState,
    useEffect
} from 'react';
import {
    connect
} from 'react-redux';
import api from '../../Services/api';
import {
    formatPrice
} from '../../Util/format';
import {
    MdShoppingCart
} from 'react-icons/md';
import {
    ProductList
} from './style';
function Home({dispatch, amount}){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        loadProduct();
    }, []);
    async function loadProduct(){
        const res = await api.get('products');

        const data = res.data.map(product=>({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        setProducts(data);
    }
    function handleAddProduct(id){
        dispatch({
            type: 'AFTER_TO_CART',
            id
        });
    }
    return (
        <ProductList>
            { products.map(product => (
                <li key={product.id}>
                    <div>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button type="button" onClick={()=>handleAddProduct(product.id)}>
                        <div>
                            <MdShoppingCart size={36} color="#fff" /> {amount[product.id] || 0}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            )) }
        </ProductList>
    )
}

export default connect(state=>({
    amount: state.cart.reduce((amount, product)=>{
        amount[product.id] = product.amount;
        return amount;
    }, {})
}))(Home);