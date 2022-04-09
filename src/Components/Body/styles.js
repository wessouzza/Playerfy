import styled from "styled-components";

export const MiddleContainer = styled.div`
    max-width: 1600px;
    height: 100vh;
    overflow-y: overlay;
    overflow-x: hidden;
  
  

    ::-webkit-scrollbar {
        display: none;
    }
    
    h3{
        padding:0.5rem  1.9rem;
        color: #fff;
    }

    .header {
        border: 2px solid #444;
        display: inline-flex;
        padding: 5px;
        background-color: rgba(0, 0, 0,.2);
        height: 16rem;
        width: 60rem;
        margin-left: 33px;
        border-radius: 16px;
        overflow-x: hidden;
        position: relative;
    }

    .slider{
        position: absolute;
        display: flex;
        gap: 7px;
    }

    .artist-name, .song-name {
        padding: 5px;
        color: #fff;
    }
`