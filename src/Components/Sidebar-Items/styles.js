import styled, {css} from "styled-components";

export const NavItems = styled.div`

        
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 10px 6px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #777;
  border-radius: 7px;
  cursor: pointer;
  transition: .4s;

  &:hover {
    color: #fff;
    letter-spacing: 2px;
  }
  
  .icons{
    margin-right: 15px;
    margin-left: 6px;
  }

  ${({active})=> active && css`
    color: #fff;
    letter-spacing: 2px;
  `}
             
`