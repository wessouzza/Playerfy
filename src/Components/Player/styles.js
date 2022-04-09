import styled, {css} from "styled-components";

export const ShufflePlayer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22rem;
    padding: 10px;
    border-radius: 8rem;
    border: 1px solid #666;
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(7px);
    left: 36%;
    bottom: 30px;


    .icons {
        font-size: 2rem;
        color: #fff;
        margin: 6px;
        cursor: pointer;
        transition: .3s;

        &:hover{
            color: #c56cf0;
            transform: scale(1.2);
        }
    }
    .play-icon {
        font-size: 4rem;
        color: #fff;
        margin: 6px;
        cursor: pointer;
        transition: .3s;
        display: inline-block;
        &:hover{
            color: #c56cf0;
            transform: scale(1.1);
        }

        ${({active})=> active && css`
            display: none;
            
        `}
    }

    .pause-icon {
        display: none;
        font-size: 4rem;
        color: #fff;
        margin: 6px;
        cursor: pointer;
        transition: .3s;

        ${({active})=> active && css`
            color: #c56cf0;
            display: inline-block;
            animation: pulse .9s alternate infinite ease-in-out;
        `}

        @keyframes pulse{
            from{
                filter: drop-shadow(0 0 3px #c56cf0);
            }
            to{
                filter: drop-shadow(0 0 10px #c56cf9)
            }
        }
    }

    
`
