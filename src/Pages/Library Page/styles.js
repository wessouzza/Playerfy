import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 2rem;

    h3{
        padding:0.5rem  0;
        color: #fff;
    }

    .left-frame {
        display: grid;
        place-items: center;
        background-color: #888;
        width: 19rem;
        height: 19rem;
        border-radius: .5rem;
        box-shadow: .5px 5px 9px rgba(0, 0, 0, .3);
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(1.03);
        }
    }
`