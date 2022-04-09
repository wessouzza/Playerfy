import styled, {css} from "styled-components";


export const SideNav = styled.nav`
    
    height: 100vh;
    width: 15rem;
    background-color: #111;

   .logo{
       padding: 8px;
       height: 70px;
       width: 70px;
   }
        
   .playlists{
       padding-top: 5px;
       margin-top: 2rem;
       
       padding: 9px;
       border-radius: 6px;
       background: rgba(255, 255, 255, .04);
       width: 90%;

       span{
           color: #fff;
           font-size: 1.1rem;
           font-weight: 600;
           letter-spacing: 2px;
           padding-bottom: 3rem;
       }

   }
`
export const SearchBox = styled.input`
    // display: none;
    border: none;
    padding: 5px;
    margin-left: 6px;
    font-size: 1.1rem;
    color: #777;
    border-radius: 9px;
    background: rgba(255, 255, 255, .04);
    outline: none;
    height: 2rem;
    transform: translateY(-18px);
    opacity: 0;
    transition: .6s;
    
    ${({active})=> active && css`
    display: block;
    opacity: 1;
    transform: translateY(0);
    `}
`