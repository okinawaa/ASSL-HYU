import styled from "styled-components";

export const TitleStyled = styled.div`
  margin: 50px 0;
  position: relative;
  background-color: transparent;

  h2 {
    width: 100%;
    color: #2c4b21;
    font-size: 2.1rem;
    font-weight: 1000;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .7rem;


    @media screen and (max-width: 496px) {
      text-align: center;
      font-size: 1.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    width: 100%;
    color: #2c4b21;
    font-size: 1.7rem;
    font-weight: 1000;
    position: relative;
    padding-bottom: .7rem;


    @media screen and (max-width: 496px) {
      text-align: center;
      font-size: 1.4rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 1.1rem;
    }
  }
  
`;
