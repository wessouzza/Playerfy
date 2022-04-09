import styled from 'styled-components';

export const SongRow = styled.div`
    margin-left: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    color: #fff;
    transition: .3s;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
        background: linear-gradient(90deg, #111, transparent);
        opacity: 0.8;
    }
    
    .artist-cover {
        height: 45px;
        width: 45px;
        border-radius: 6px;
    }

    .song-info {
        h1{
            margin-left: 5px;
            font-size: 16px;
        }

        p{
            margin-left: 5px;
            font-size: 14px;
            margin-top: 3px;
            color: #666;
        }

    }
    
`