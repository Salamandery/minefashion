import styled from 'styled-components';
import {darken, lighten} from 'polished';
import {
    Link
} from 'react-router-dom';
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    border-radius: 4px;
    background: #7a1f5c;
    border-radius: 4px;
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, .1);

    a {
        text-decoration: none;
        color: #f5d6eb;
        padding: 20px;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }
`;
export const Cart = styled(Link)`
    display: flex;
    padding: 20px;
    align-items: center;
    text-decoration: none;
    flex-direction: row;
    transition: opacity .2s;
    background: ${lighten(.04, "#7a1f5c")};

    &:hover {
        opacity: 0.7;

    }

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #f5d6eb;
        }
        span {
            font-size: 12px;
            color: ${darken(".1", "#f5d6eb")};
        }
    }
`;