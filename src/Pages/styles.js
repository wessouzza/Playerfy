import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    a {
        padding: 9px;
        border-radius: 20px;
        background-color: #c56cf0;
        font-size: 1.1rem;
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;
        transition: .3s;

        &:hover{
            background-color: #fff;
            color: #c56cf0;
            outline: solid #c56cf0;
        }
    }
    
`

