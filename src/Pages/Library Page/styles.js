import styled from 'styled-components';

export const Container = styled.div`
    
    h3{
        padding:0.5rem  1.9rem;
        color: #fff;
    }
    
   .recently-played{
       padding: 0 .5rem;
       height: 15rem;
       width: 45rem;
       background-color: rgba(0, 0, 0, .2);
       margin: 10px 2rem;
       border-radius: 16px;
       overflow: hidden;
       overflow-y: overlay;
   
       ::-webkit-scrollbar {
           display: none;
       }
   
       h4{
           position: fixed;
           padding:0.5rem  0;
           color: #c56cf0;
           z-index: 100;
       }

   } 

   
`