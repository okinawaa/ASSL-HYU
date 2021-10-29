import styled from "styled-components";

export const PublicationDetailContainer = styled.div`
  padding-bottom: 3rem;
  margin: 7rem 15vh;
  @media screen and (max-width: 900px ) {
    margin: 0 1.8rem;
  }
  @media screen and (max-width: 500px ) {
    margin: 0 1.3rem;
  }
`

export const DescContainer = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`

export const ImgSetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 10rem;
    width: 20%;
    height: 10vh;

    @media screen and (max-width: 600px ) {
      width: 100%;
    }
    
  }

  button {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    color: black;
    border-radius: 4px;
    border: 3px solid #70AD47;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    font-weight: bold;
    background-color: white;

    &:hover {
      background-color: #e0e0e0;
      border: 3px solid #ace588;
    }


    @media screen and (max-width: 1180px ) {
      font-size: 1.2rem;
    }

    
  }



`

export const ImgContainer = styled.img`

  margin: 4rem 0;
  width: 50%;
  object-fit: contain;
  border-radius: 4px;
  @media screen and (max-width: 1180px ) {
    width: 60%;
  }

  @media screen and (max-width: 700px ) {
    width: 90%;
  }

  @media screen and (max-width: 700px ) {
    width: 100%;
  }
`