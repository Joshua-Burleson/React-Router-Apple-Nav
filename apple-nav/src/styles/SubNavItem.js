import React from 'react';
import styled from 'styled-components';

export default styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 70px;
    text-decoration: none;

    img {
        height: 54px;
        width: 48px;
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 1rem;
    }

    span {
        font-size: 0.75rem;
        color: red;
        margin-top: -0.75rem;
    }
`;