import styled from "styled-components";

export const MainGridTextContainer = styled.div`
  width: 100%;
  margin: 25px auto;
 
  & > div {
    color: #656565;
    margin: 0.5rem 0;
    display: inline-block;
    width: 50%;
    font-size: 1.2rem;
    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 1.4rem;
      width: 100%;
    }
  }
`

