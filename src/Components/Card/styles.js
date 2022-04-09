import styled from "styled-components";

export const CardArtist = styled.div`
    width: 14rem;
    height: 100%;
    border-radius: 11px;
    
    position: relative;
    cursor: pointer;

   
    h1{
        font-size: 1rem;
        position: absolute;
        bottom: 19px;
        margin-left: 5px;
        color: #666;
    }

    p{
        position: absolute;
        bottom: 6px;
        margin-left: 5px;
        color: #666;
    }

    .card-image{
        width: 100%;
        height: 16rem;
        border-radius: 11px;
    }

    .play-icon{
        
        padding: 9px;
        display: flex;
        place-items: center;
        position: absolute;
        color: #c56cf0;
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all.4s;

        &:hover{
            transform: scale(1.1);
        }
    }
`