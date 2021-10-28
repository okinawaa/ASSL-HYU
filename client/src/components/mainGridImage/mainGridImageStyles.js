import styled from "styled-components";

export const MainGridImageContainer = styled.div`
  margin: 6rem 0;
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }

  }

  img {
    width: 100%;
    height: 130px;
    border: 3px solid #70AD47;
    border-radius: 6px;
    transition: 0.4s ease-in-out;
    z-index: 0;
    cursor: pointer;

    &:hover {
      z-index: 2;
      transform: scale(1.2);
    }

    @media screen and (max-width: 500px) {
      width: 90%;
      height: 90%;
    }
    @media screen and (min-width: 1000px) {
      height: ${props => props.member ? '350px' : '250px'};
    }

    @media screen and (min-width: 2000px) {
      height: ${props => props.member ? '410px' : '360px'};
    }
  }

  span {
    margin-top: 2rem;
    font-size: 1.4rem;
    color: #656565;
  }

`

export const ColContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`