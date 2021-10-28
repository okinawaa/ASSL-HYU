import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const MainImgContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  h1 {
    position: absolute;
    color: white;
    bottom: 1rem;
    left: 1rem;
    font-size: 3rem;

    @media screen and (max-width: 900px ){
      font-size: 1.8rem;
    }
    @media screen and (max-width: 400px ){
      font-size: 1.3rem;
    }
  }
`


export const ContentContainer = styled.div`
  margin: 0 15vh;
  @media screen and (max-width: 900px ) {
    margin: 0 1.2rem;
  }
  @media screen and (max-width: 400px ) {
    margin: 0 0.5rem;
  }

  p {
    line-height: 1.9rem;
    margin: 6rem 0;
    font-size: 1.2rem;

    span {
      font-weight: 900;
      color: #2c4b21;
      font-size: 1.25rem;
    }
  }
`