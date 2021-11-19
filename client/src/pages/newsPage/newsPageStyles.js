import styled from "styled-components";

export const NewsContainer = styled.div`
  
  margin: 7rem 15vh;
  @media screen and (max-width: 900px ) {
    margin: 0 1.8rem;
  }
  @media screen and (max-width: 500px ) {
    margin: 0 1.3rem;
  }
  
 

  td {
    font-size: 1.05rem;
    @media screen and (max-width: 500px ) {
      font-size: 0.75rem;
    }
  }

  a {
    font-size: 1.05rem;
    font-weight: bold;
    color: black;
    transition: 0.4s ease-in-out;
    &:hover {
      color: #315624;
    }

    @media screen and (max-width: 500px ) {
      font-size: 0.85rem;
    }
  }

`