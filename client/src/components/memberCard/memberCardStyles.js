import styled from "styled-components";


export const MemberCardContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  img{
    border : 2.5px solid #70AD47;
    border-radius: 4px;
    width: 400px;
    height: 400px;
  }
`

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  span{
    font-size: 1.5rem;
    font-weight: 800;
    margin: 1rem 0;
  }

  span:first-of-type{
    margin: 0 0;
  }
  p{
    font-size: 1.3rem;
    font-weight: 600;
  }
`