import React from 'react';
import styled from 'styled-components';

export default styled.ul`
    width: 100vw;
    height: 4vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0;
    padding-right: 400px;
    list-style: none;
    background: black;
    
    a {
        color: white;
        text-decoration: none;
        font-size: 1rem;

        &:first-child {
            margin-left: 15%;
        }

        &:last-child {
            margin-right: 15%;
        }
    }
`;