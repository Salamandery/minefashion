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
function Home({dispatch}){
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
    function handleAddProduct(product){
        dispatch({
            type: 'ADD_TO_CART',
            product
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
                    <button type="button" onClick={()=>handleAddProduct(product)}>
                        <div>
                            <MdShoppingCart size={36} color="#fff" /> 3
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            )) }
        </ProductList>
    )
}

export default connect()(Home);