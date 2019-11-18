import styled from 'styled-components';

export default styled.ul`
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    background: rgba(200,200,200,0.66);

    a {
        &:first-child{
            margin-left: 20%;
        }
        &:last-child{
            margin-right: 20%;
        }
    }
`;