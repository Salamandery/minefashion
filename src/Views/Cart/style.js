import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, .1);

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #a4287d;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;

            &:hover {
                background: ${darken(.45, "#f5d6eb")}; 
            }
        }
    }
`;
export const ProductTable = styled.table`
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .1);

    thead th {
        border-bottom: 1px solid #eee;
    }
    thead th {
        color: #999;
        text-align: laft;
        padding: 12px;
    }
    tbody tr:not(:last-of-type) td {
        border-bottom: 1px solid #eee;
    }
    tbody tr td {
        padding: 12px;
        vertical-align: middle;
    }
    #wrapper {
        width: auto;
        -background: ${darken(".04", "#ecb3ff")};
    }
    img {
        height: 100px;
    }
    strong {
        color: #333;
        display: block;
    }
    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }
    button {
        background: none;
        color: #a4287d;
        border: 0;
        padding: 5px;
        margin: 1px;
        border-radius: 4px;
        transition: background .2s;

        &:hover {
            background: rgba(0,0,0, .05);
        }
    }
`;
export const Total = styled.div`
    display: flex;
    align-items: baseline;
    
    span {
        color: #999;
        font-weight: bold;
    }
    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;