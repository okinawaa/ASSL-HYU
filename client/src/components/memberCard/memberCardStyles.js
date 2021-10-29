import styled from "styled-components";


export const MemberCardContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  img{
    border : 2.5px solid #70AD47;
    border-radius: 4px;
    width: ${props=>props.member ? '300px' : '400px'};
    height:  ${props=>props.member ? '300px' : '400px'};
    @media screen and (max-width: 500px) {
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }
  }
`

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
  span{
    font-size: 1.5rem;
    font-weight: 800;
    margin: 1rem 0;
    @media screen and (max-width: 500px) {
     text-align: center;
    }
  }

  span:first-of-type{
    margin: 0 0;
  }
  p{
    font-size: 1.3rem;
    font-weight: 600;
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }
`