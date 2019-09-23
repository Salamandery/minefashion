import styled from 'styled-components';
import {darken} from 'polished';
import {
    Link
} from 'react-router-dom';
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    padding: 20px;
    border-radius: 4px;
    background: ${darken(".03","#ecb3ff")};

    a {
        text-decoration: none;
    }
`;
export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-direction: row;
    transition: opacity .2s;

    &:hover {
        opacity: 0.7;

    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #7159c1;
        }
        span {
            font-size: 12px;
            color: ${darken(".1", "#7159c1")};
        }
    }
`;